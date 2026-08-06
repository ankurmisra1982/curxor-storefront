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

// Desk strips keep their unversioned public URL (g3-demo.ts links them) but are
// sourced from the current -v3 cuts. The unversioned files in the pack are the
// Jul 8 originals, which predate the desk-crew rebrand and were never remastered.
for (const desk of ["capital", "creator", "work"]) {
  const v3 = path.join(packRoot, "investor-pack", `g3-desk-strip-${desk}-v3.mp4`);
  const legacy = path.join(packRoot, "investor-pack", `g3-desk-strip-${desk}.mp4`);
  const src = fs.existsSync(v3) ? v3 : legacy;
  if (copyFile(src, path.join(demoRoot, "g3", `g3-desk-strip-${desk}.mp4`))) copied++;
}

// Swap A (2026-08-02 picture-lock): prefer v3 remagination → live *-v1 URL
{
  const v3Inception = path.join(packRoot, "investor-pack", "g3-inception-reel-v3.mp4");
  const v1Inception = path.join(packRoot, "investor-pack", "g3-inception-reel-v1.mp4");
  const inceptionSrc = fs.existsSync(v3Inception) ? v3Inception : v1Inception;
  if (copyFile(inceptionSrc, path.join(demoRoot, "investor", "g3-inception-reel-v1.mp4"))) copied++;
  if (fs.existsSync(v3Inception)) {
    if (copyFile(v3Inception, path.join(demoRoot, "investor", "g3-inception-reel-v3.mp4"))) copied++;
  }
}

{
  const v3Proof = path.join(packRoot, "investor-pack", "g3-investor-proof-v3.mp4");
  const v1Proof = path.join(packRoot, "investor-pack", "g3-investor-proof-v1.mp4");
  const proofSrc = fs.existsSync(v3Proof) ? v3Proof : v1Proof;
  if (copyFile(proofSrc, path.join(demoRoot, "investor", "g3-investor-proof-v1.mp4"))) copied++;
  if (fs.existsSync(v3Proof)) {
    if (copyFile(v3Proof, path.join(demoRoot, "investor", "g3-investor-proof-v3.mp4"))) copied++;
  }
}

if (copyFile(
  path.join(packRoot, "master-film", "hero", "hero-category-v1.mp4"),
  path.join(demoRoot, "hero-category-v1.mp4")
)) copied++;

if (copyFile(
  path.join(packRoot, "master-film", "hero", "hero-category-badge-v1.mp4"),
  path.join(demoRoot, "hero-category-badge-v1.mp4")
)) copied++;

// Hero badge v6 — LIVE SEND (promoted 2026-08-06); v5.01 prior send kept for rollback and
// because links already sent to investors point at the versioned v5.01 URL; v4 short alternate.
// Every badge cut is staged under its own versioned URL, so no already-sent link ever changes
// what it plays. Do not clobber *-v1 (rollback + CTO HOLD).
{
  const stageBadge = (name: string) => {
    const inv = path.join(packRoot, "investor-pack", name);
    const master = path.join(packRoot, "master-film", "hero", name);
    const src = fs.existsSync(inv) ? inv : master;
    if (!fs.existsSync(src)) return;
    if (copyFile(src, path.join(demoRoot, name))) copied++;
  };

  stageBadge("hero-category-badge-v6.mp4");
  stageBadge("hero-category-badge-v5.01.mp4");
  stageBadge("hero-category-badge-v4.mp4");
}

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
    // Press kit carries exactly one category cut — the live send, newest first.
    ...((): string[] => {
      const preferred = [
        "hero-category-badge-v6.mp4",
        "hero-category-badge-v5.01.mp4",
        "hero-category-badge-v4.mp4",
        "hero-category-badge-v1.mp4",
      ].map((n) => path.join(demoRoot, n));
      const hit = preferred.find((p) => fs.existsSync(p));
      return hit ? [hit] : [];
    })(),
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
