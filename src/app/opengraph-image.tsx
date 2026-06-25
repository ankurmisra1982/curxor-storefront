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
            width: 540,
            padding: "44px 52px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori OG renderer requires img */}
            <img src={lockupSrc} alt="" width={280} height={80} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              flex: 1,
              justifyContent: "center",
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: 48,
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
                flexWrap: "wrap",
                fontSize: 22,
                lineHeight: 1.35,
                fontWeight: 400,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              {siteConfig.viralHook}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              fontSize: 13,
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <span style={{ display: "flex", color: "#BF5AF2" }}>
              {siteConfig.preOrderPrice} once
            </span>
            <span style={{ display: "flex" }}>$0/mo API</span>
            <span style={{ display: "flex", color: "#BF5AF2" }}>
              JOIN WAITLIST
            </span>
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
