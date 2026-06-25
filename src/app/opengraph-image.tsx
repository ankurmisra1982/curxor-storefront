import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = "CurXor — Mint Autonomous Employees on Bare Metal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Image() {
  const [fontRegular, fontBold, screenshot, lockupSvg] = await Promise.all([
    loadGoogleFont("JetBrains+Mono", 400),
    loadGoogleFont("JetBrains+Mono", 700),
    readPublicAsset("demo/01-home.png"),
    readPublicAsset("brand/curxor-lockup.svg"),
  ]);

  const screenshotSrc = `data:image/png;base64,${screenshot.toString("base64")}`;
  const lockupSrc = `data:image/svg+xml;base64,${lockupSvg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#000000",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          fontFamily: "JetBrains Mono",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 520,
            padding: "48px 56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori OG renderer requires img */}
            <img src={lockupSrc} alt="" width={300} height={86} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: 44,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              {siteConfig.heroHeadline}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 16,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.4,
              }}
            >
              {siteConfig.heroSubhead}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                color: "#BF5AF2",
                letterSpacing: "0.02em",
              }}
            >
              {siteConfig.viralHook}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              fontSize: 14,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <span style={{ display: "flex", color: "#BF5AF2" }}>126 TOPS</span>
            <span style={{ display: "flex" }}>$0/mo API</span>
            <span style={{ display: "flex" }}>curxor.ai</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 40px 32px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              border: "1px solid rgba(191,90,242,0.35)",
              backgroundColor: "#050505",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "10px 14px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              FLIGHT COMMAND · HOME HUB
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori OG renderer requires img */}
            <img
              src={screenshotSrc}
              alt=""
              width={620}
              height={388}
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "JetBrains Mono",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "JetBrains Mono",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}

async function readPublicAsset(relativePath: string) {
  const absolutePath = path.join(process.cwd(), "public", relativePath);
  try {
    return await readFile(absolutePath);
  } catch {
    const response = await fetch(new URL(`/${relativePath}`, siteConfig.siteUrl));
    if (!response.ok) {
      throw new Error(`Failed to load public asset: ${relativePath}`);
    }
    return Buffer.from(await response.arrayBuffer());
  }
}

async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    { next: { revalidate: 60 * 60 * 24 * 365 } }
  ).then((res) => res.text());

  const match = css.match(
    /src: url\((.+)\) format\('(?:opentype|truetype)'\)/
  );
  if (!match) throw new Error(`Failed to load font: ${family} ${weight}`);

  return fetch(match[1]).then((res) => res.arrayBuffer());
}
