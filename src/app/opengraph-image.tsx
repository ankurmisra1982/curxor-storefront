import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = "CurXor — Mint AI Employees on Bare Metal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Image() {
  const [fontRegular, fontBold, screenshot] = await Promise.all([
    loadGoogleFont("JetBrains+Mono", 400),
    loadGoogleFont("JetBrains+Mono", 700),
    readFile(path.join(process.cwd(), "public/demo/01-home.png")),
  ]);

  const screenshotSrc = `data:image/png;base64,${screenshot.toString("base64")}`;

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
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: "#BF5AF2",
                boxShadow: "0 0 18px rgba(191,90,242,0.9)",
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 20,
                letterSpacing: "0.35em",
                fontWeight: 700,
              }}
            >
              CURXOR
            </div>
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
              Mint AI Employees on Bare Metal.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#BF5AF2",
                letterSpacing: "0.02em",
              }}
            >
              {siteConfig.viralHook}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 16,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.4,
              }}
            >
              Flight Command · 64GB UMA · eno2 kill switch · $3,999 once
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
