import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = "CurXor — Vibe-Code the Physical World";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontRegular = await loadGoogleFont("JetBrains+Mono", 400);
  const fontBold = await loadGoogleFont("JetBrains+Mono", 700);

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
            flex: 1,
            padding: "64px 72px",
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
                fontSize: 22,
                letterSpacing: "0.35em",
                fontWeight: 700,
              }}
            >
              CURXOR
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: 68,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                maxWidth: 760,
              }}
            >
              Vibe-Code the Physical World.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#BF5AF2",
                letterSpacing: "0.04em",
                maxWidth: 680,
              }}
            >
              {siteConfig.tagline}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              fontSize: 16,
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <span style={{ display: "flex", color: "#BF5AF2" }}>126 TOPS</span>
            <span style={{ display: "flex" }}>|</span>
            <span style={{ display: "flex" }}>&lt;1ms TELEMETRY</span>
            <span style={{ display: "flex" }}>|</span>
            <span style={{ display: "flex" }}>0 CLOUD DEPS</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 420,
            paddingRight: 56,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 280,
              height: 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                border: "1px solid rgba(191,90,242,0.25)",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 28,
                display: "flex",
                border: "1px solid rgba(191,90,242,0.45)",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                display: "flex",
                width: 88,
                height: 88,
                borderRadius: 999,
                border: "2px solid #BF5AF2",
                boxShadow:
                  "0 0 40px rgba(191,90,242,0.55), inset 0 0 24px rgba(191,90,242,0.25)",
              }}
            />
            <div
              style={{
                position: "absolute",
                display: "flex",
                width: 220,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, #BF5AF2, transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                display: "flex",
                width: 1,
                height: 220,
                background:
                  "linear-gradient(180deg, transparent, #BF5AF2, transparent)",
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
