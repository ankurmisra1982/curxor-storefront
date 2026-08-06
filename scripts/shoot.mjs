/**
 * Screenshot harness for design review. Drives headless Chrome over CDP using
 * Node's built-in WebSocket, so it adds no dependency to the project.
 *
 * Usage: node scripts/shoot.mjs <outDir> [baseUrl]
 */
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const OUT_DIR = process.argv[2] ?? ".aes/current";
const BASE = process.argv[3] ?? "http://localhost:3000";
const PORT = 9333;

const CHROME =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

/**
 * [name, path, viewport, maxFrames] — each route is walked top to bottom in
 * viewport-height steps, so shots stay aligned when a page changes length.
 */
const SHOTS = [
  ["home", "/", "desktop", 10],
  ["pricing", "/pricing", "desktop", 6],
  ["architecture", "/architecture", "desktop", 7],
  ["press", "/press", "desktop", 11],
  ["changelog", "/changelog", "desktop", 5],
  ["capital", "/capital", "desktop", 5],
  ["creator", "/creator", "desktop", 5],
  ["outreach", "/outreach", "desktop", 5],
  ["signal", "/signal", "desktop", 5],
  ["compare", "/compare", "desktop", 3],
  ["compare-slug", "/compare/mac-studio-ollama", "desktop", 4],
  ["for-traders", "/for/traders", "desktop", 4],
  ["for-creators", "/for/creators", "desktop", 4],
  ["for-agencies", "/for/agencies", "desktop", 4],
  ["journal", "/journal", "desktop", 4],
  ["journal-slug", "/journal/working-product-on-real-metal", "desktop", 4],
  ["about", "/about", "desktop", 3],
  ["privacy", "/privacy", "desktop", 4],
  ["terms", "/terms", "desktop", 4],
  ["not-found", "/this-page-does-not-exist", "desktop", 2],
  ["home", "/", "mobile", 4],
  ["pricing", "/pricing", "mobile", 3],
  ["press", "/press", "mobile", 3],
  ["for-traders", "/for/traders", "mobile", 3],
  ["terms", "/terms", "mobile", 2],
];

const VIEWPORTS = {
  desktop: { width: 1440, height: 950, mobile: false, deviceScaleFactor: 1 },
  mobile: { width: 390, height: 844, mobile: true, deviceScaleFactor: 2 },
};

const profile = join(tmpdir(), `cdp-shoot-${Date.now()}`);

const chrome = spawn(CHROME, [
  "--headless=new",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  "--hide-scrollbars",
  "--no-first-run",
  "--disable-extensions",
  "--force-color-profile=srgb",
  "--window-size=1440,950",
]);
chrome.on("error", (e) => {
  console.error("chrome failed to launch:", e.message);
  process.exit(1);
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function debuggerUrl() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const json = await res.json();
      if (json.webSocketDebuggerUrl) return json.webSocketDebuggerUrl;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  throw new Error("chrome debugger never came up");
}

class Cdp {
  #ws;
  #id = 0;
  #pending = new Map();
  #events = new Map();

  static async connect(url) {
    const cdp = new Cdp();
    cdp.#ws = new WebSocket(url);
    await new Promise((res, rej) => {
      cdp.#ws.addEventListener("open", res, { once: true });
      cdp.#ws.addEventListener("error", rej, { once: true });
    });
    cdp.#ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && cdp.#pending.has(msg.id)) {
        const { resolve, reject } = cdp.#pending.get(msg.id);
        cdp.#pending.delete(msg.id);
        if (msg.error) reject(new Error(JSON.stringify(msg.error)));
        else resolve(msg.result);
      } else if (msg.method) {
        cdp.#events.get(msg.method)?.forEach((fn) => fn(msg.params));
      }
    });
    return cdp;
  }

  on(method, fn) {
    if (!this.#events.has(method)) this.#events.set(method, []);
    this.#events.get(method).push(fn);
  }

  send(method, params = {}, sessionId) {
    const id = ++this.#id;
    return new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      this.#ws.send(JSON.stringify({ id, method, params, sessionId }));
    });
  }

  close() {
    this.#ws.close();
  }
}

const wsUrl = await debuggerUrl();
const browser = await Cdp.connect(wsUrl);

const { targetId } = await browser.send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await browser.send("Target.attachToTarget", { targetId, flatten: true });

const send = (method, params) => browser.send(method, params, sessionId);

await send("Page.enable");
await send("Runtime.enable");

mkdirSync(OUT_DIR, { recursive: true });

let count = 0;
for (const [name, path, vp, maxFrames] of SHOTS) {
  await send("Emulation.setDeviceMetricsOverride", VIEWPORTS[vp]);

  const loaded = new Promise((resolve) => {
    const handler = () => resolve();
    browser.on("Page.loadEventFired", handler);
    setTimeout(resolve, 15000);
  });
  await send("Page.navigate", { url: BASE + path });
  await loaded;
  // Let fonts, images, and any client-side layout settle.
  await sleep(1400);
  await send("Runtime.evaluate", {
    expression: "document.documentElement.style.scrollBehavior='auto'",
  });

  const { result } = await send("Runtime.evaluate", {
    expression: "document.body.scrollHeight",
    returnByValue: true,
  });
  const pageHeight = result.value;
  const { height: vpHeight } = VIEWPORTS[vp];

  // Slight overlap between frames so nothing falls in a seam.
  const step = Math.round(vpHeight * 0.92);
  const positions = [];
  for (let i = 0; i < maxFrames; i++) {
    const y = i * step;
    if (i > 0 && y > pageHeight - 200) break;
    positions.push(y);
  }

  for (const y of positions) {
    // Must really scroll: lazy images below the fold never decode otherwise.
    await send("Runtime.evaluate", { expression: `window.scrollTo(0, ${y})` });
    await sleep(900);
    const shot = await send("Page.captureScreenshot", { format: "png" });
    const file = join(
      OUT_DIR,
      `${name}-${vp}-${String(y).padStart(5, "0")}.png`,
    );
    writeFileSync(file, Buffer.from(shot.data, "base64"));
    count++;
  }
  console.log(`${name} ${vp} — page ${pageHeight}px`);
}

console.log(`\n${count} shots -> ${OUT_DIR}`);

browser.close();
chrome.kill();
try {
  rmSync(profile, { recursive: true, force: true });
} catch {
  /* profile cleanup is best effort */
}
