import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SOURCE_SVG = path.join(root, "docs/assets/CurXor-Hardware-Badge.svg");
const BRAND_DIR = path.join(root, "public/brand");
const SOCIAL_DIR = path.join(root, "public/social");
const DOCS_MARK = path.join(root, "docs/assets/curxor-logo-mark.svg");
const FAVICON = path.join(root, "public/favicon.svg");

function cleanFragment(fragment: string): string {
  return fragment
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<animate[\s\S]*?\/>/g, "")
    .replace(/(<rect\b[^>]*)(>)\s*<\/rect>/g, "$1/>")
    .replace(/\sclass="[^"]*"/g, "")
    .replace(/\sid="[^"]*"/g, "")
    .replace(/xmlns:xlink="[^"]*"\s*/g, "")
    .replace(/#ffffff/gi, "#FFFFFF")
    .replace(
      /font-family="JetBrains Mono, monospace"/g,
      'font-family="JetBrains Mono, ui-monospace, monospace"'
    )
    .replace(/\n\s*\n/g, "\n")
    .trim();
}

function extractInnerSvg(raw: string): string {
  const match = raw.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!match) {
    throw new Error(`Could not parse SVG root in ${SOURCE_SVG}`);
  }
  return cleanFragment(match[1]);
}

function extractBalancedGroup(fragment: string, openTag: string): string {
  const start = fragment.indexOf(openTag);
  if (start === -1) {
    throw new Error(`Could not find group: ${openTag}`);
  }

  let depth = 0;
  const tagPattern = /<\/?g\b[^>]*>/g;
  tagPattern.lastIndex = start;

  let match: RegExpExecArray | null;
  while ((match = tagPattern.exec(fragment)) !== null) {
    if (match.index < start) {
      continue;
    }

    if (match[0].startsWith("</")) {
      depth -= 1;
      if (depth === 0) {
        return fragment.slice(start, tagPattern.lastIndex);
      }
      continue;
    }

    depth += 1;
  }

  throw new Error(`Unclosed group: ${openTag}`);
}

function extractMark(inner: string): string {
  return extractBalancedGroup(inner, '<g transform="translate(65, 100)">');
}

function extractWordmark(inner: string): string {
  const mark = extractMark(inner);
  return inner.replace(mark, "").trim();
}

function wrapSvg(viewBox: string, title: string, inner: string): string {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" role="img" aria-label="${title}">`,
    `  <title>${title}</title>`,
  ]
    .concat(inner.split("\n").map((line) => (line ? `  ${line}` : line)))
    .concat(["</svg>", ""])
    .join("\n");
}

function faviconSvg(markInner: string): string {
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">',
    '  <rect width="32" height="32" fill="#000"/>',
    '  <g transform="translate(16, 16)">',
    '    <g transform="scale(0.28)">',
    ...markInner
      .replace(/<g transform="translate\(65, 100\)">\s*<g transform="scale\(1.2\)">/, "")
      .replace(/<\/g>\s*<\/g>$/, "")
      .split("\n")
      .map((line) => (line ? `      ${line.trim()}` : line)),
    "    </g>",
    "  </g>",
    "</svg>",
    "",
  ].join("\n");
}

async function rasterize(
  svg: string,
  width: number,
  height: number,
  outPath: string
): Promise<void> {
  await sharp(Buffer.from(svg)).resize(width, height).png().toFile(outPath);
}

async function profilePng(markSvg: string, outPath: string, size = 1024): Promise<void> {
  const markSize = Math.round(size * 0.58);
  const markPng = await sharp(Buffer.from(markSvg))
    .resize(markSize, markSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .png()
    .toBuffer();

  const pad = Math.floor((size - markSize) / 2);
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    },
  })
    .composite([{ input: markPng, top: pad, left: pad }])
    .png()
    .toFile(outPath);
}

async function main(): Promise<void> {
  if (!fs.existsSync(SOURCE_SVG)) {
    throw new Error(`Brand source missing: ${SOURCE_SVG}`);
  }

  const raw = fs.readFileSync(SOURCE_SVG, "utf8");
  const inner = extractInnerSvg(raw);
  const mark = extractMark(inner);
  const wordmark = extractWordmark(inner);

  const markCentered = mark.replace(
    'transform="translate(65, 100)"',
    'transform="translate(65, 65)"'
  );

  const outputs: Array<{ file: string; content: string }> = [
    {
      file: path.join(BRAND_DIR, "curxor-hardware-badge.svg"),
      content: wrapSvg("0 0 700 200", "CurXor hardware badge", inner),
    },
    {
      file: path.join(BRAND_DIR, "curxor-lockup.svg"),
      content: wrapSvg("0 0 700 200", "CurXor", inner),
    },
    {
      file: path.join(BRAND_DIR, "curxor-mark.svg"),
      content: wrapSvg("0 0 130 130", "CurXor mark", markCentered),
    },
    {
      file: path.join(BRAND_DIR, "curxor-wordmark.svg"),
      content: wrapSvg("130 40 502 120", "CurXor wordmark", wordmark),
    },
    {
      file: DOCS_MARK,
      content: wrapSvg("0 0 130 130", "CurXor mark", markCentered),
    },
    {
      file: FAVICON,
      content: faviconSvg(mark),
    },
  ];

  fs.mkdirSync(BRAND_DIR, { recursive: true });

  for (const { file, content } of outputs) {
    fs.writeFileSync(file, content, "utf8");
    console.log(`→ ${path.relative(root, file)}`);
  }

  const markSvg = outputs.find((o) => o.file.endsWith("curxor-mark.svg"))!.content;
  const lockupSvg = outputs.find((o) => o.file.endsWith("curxor-lockup.svg"))!.content;

  await rasterize(markSvg, 512, 512, path.join(BRAND_DIR, "curxor-mark-512.png"));
  console.log("→ public/brand/curxor-mark-512.png");

  await rasterize(lockupSvg, 1400, 400, path.join(BRAND_DIR, "curxor-hardware-badge.png"));
  console.log("→ public/brand/curxor-hardware-badge.png");

  fs.mkdirSync(SOCIAL_DIR, { recursive: true });
  const profiles = [
    "curxor-profile-logo.png",
    "curxor-profile-instagram.png",
    "curxor-profile-tiktok.png",
  ] as const;

  for (const file of profiles) {
    const out = path.join(SOCIAL_DIR, file);
    await profilePng(markSvg, out);
    console.log(`→ public/social/${file}`);
  }

  console.log("Brand sync complete from docs/assets/CurXor-Hardware-Badge.svg");
}

main().catch((error) => {
  console.error("[sync-brand]", error);
  process.exit(1);
});
