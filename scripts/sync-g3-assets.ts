#!/usr/bin/env tsx
/**
 * Sync G3 demo assets from sibling curxor-os → public/demo/
 * Run after G3 capture or investor-pack assembly in curxor-os.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storefrontRoot = path.join(__dirname, "..");
const osRoot = process.env.CURXOR_OS_ROOT ?? path.join(storefrontRoot, "..", "curxor-os");
const demoRoot = path.join(storefrontRoot, "public", "demo");
const packRoot = path.join(osRoot, "docs", "demo-pack");
const g3Src = path.join(packRoot, "screenshots", "g3");
const heroExports = path.join(osRoot, "docs", "gtm", "hero-film-figma", "exports");

const SCREENSHOT_MAP: [string, string][] = [
  ["_capture-home.png", "01-home.png"],
  ["01-capital-trade-top.png", "02-capital-paper.png"],
  ["06-creator-create-queue.png", "03-creator-queue.png"],
  ["08-work-opportunities-seq.png", "04-work-pipeline.png"],
  ["05-capital-rule-fired.png", "05-cafe-rule-fired.png"],
  ["_capture-settings-updates.png", "06-settings-updates.png"],
  ["_capture-system-health.png", "07-system-health-toks.png"],
  ["07-creator-publish-approval.png", "08-creator-publish-approval.png"],
];

function copyFile(src: string, dest: string) {
  if (!fs.existsSync(src)) {
    console.warn(`skip (missing): ${src}`);
    return false;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`→ ${path.relative(storefrontRoot, dest)}`);
  return true;
}

function copyGlob(srcDir: string, pattern: string, destDir: string) {
  if (!fs.existsSync(srcDir)) return;
  for (const file of fs.readdirSync(srcDir)) {
    if (file.endsWith(pattern.replace("*", "")) || pattern === "*") {
      if (file.endsWith(".png") || file.endsWith(".mp4")) {
        copyFile(path.join(srcDir, file), path.join(destDir, file));
      }
    }
  }
}

let copied = 0;

for (const [srcName, destName] of SCREENSHOT_MAP) {
  if (copyFile(path.join(g3Src, srcName), path.join(demoRoot, "g3", destName))) copied++;
}

for (const mp4 of [
  "g3-desk-strip-capital.mp4",
  "g3-desk-strip-creator.mp4",
  "g3-desk-strip-work.mp4",
]) {
  if (copyFile(path.join(packRoot, "investor-pack", mp4), path.join(demoRoot, "g3", mp4))) copied++;
}

if (copyFile(
  path.join(packRoot, "investor-pack", "g3-inception-reel-v1.mp4"),
  path.join(demoRoot, "investor", "g3-inception-reel-v1.mp4")
)) copied++;

if (copyFile(
  path.join(packRoot, "investor-pack", "g3-investor-proof-v1.mp4"),
  path.join(demoRoot, "investor", "g3-investor-proof-v1.mp4")
)) copied++;

if (copyFile(
  path.join(packRoot, "master-film", "hero", "hero-category-v1.mp4"),
  path.join(demoRoot, "hero-category-v1.mp4")
)) copied++;

if (copyFile(
  path.join(packRoot, "master-film", "hero", "hero-deck-loop-v1.mp4"),
  path.join(demoRoot, "hero-deck-loop-v1.mp4")
)) copied++;

if (fs.existsSync(heroExports)) {
  for (const file of fs.readdirSync(heroExports).filter((f) => f.endsWith(".png"))) {
    if (copyFile(path.join(heroExports, file), path.join(demoRoot, "hero-film", file))) copied++;
  }
}

const pressDir = path.join(storefrontRoot, "public", "press");
const pressZip = path.join(pressDir, "curxor-press-kit-g3.zip");
const heroFilmDir = path.join(demoRoot, "hero-film");
const metricsCard = path.join(pressDir, "metrics-cite-card.txt");

if (fs.existsSync(heroFilmDir)) {
  fs.mkdirSync(pressDir, { recursive: true });
  const zipEntries = [
    ...fs.readdirSync(heroFilmDir).filter((f) => f.endsWith(".png")).map((f) => path.join(heroFilmDir, f)),
    ...(fs.existsSync(metricsCard) ? [metricsCard] : []),
  ];
  if (zipEntries.length > 0) {
    const listFile = path.join(pressDir, ".press-kit-files.txt");
    fs.writeFileSync(listFile, zipEntries.map((f) => `@${f}`).join("\n"));
    try {
      execSync(`powershell -NoProfile -Command "Compress-Archive -Path '${zipEntries.join("','")}' -DestinationPath '${pressZip}' -Force"`, {
        stdio: "inherit",
      });
      console.log(`→ ${path.relative(storefrontRoot, pressZip)}`);
      copied++;
    } catch {
      console.warn("skip press zip rebuild (Compress-Archive failed)");
    } finally {
      if (fs.existsSync(listFile)) fs.unlinkSync(listFile);
    }
  }
}

console.log(`\nSynced ${copied} G3 assets from ${osRoot}`);
