import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    // HeroProductVisual uses quality={85}; Next 16 requires an explicit allowlist.
    qualities: [75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  outputFileTracingIncludes: {
    "/opengraph-image": [
      "./public/demo/g3/01-home.png",
      "./public/brand/curxor-hardware-badge.png",
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.curxor.ai" }],
        destination: "https://curxor.ai/:path*",
        permanent: true,
      },
      // Desk-crew rename — old *-claw still URLs
      {
        source: "/demo/03-capital-claw.png",
        destination: "/demo/03-capital.png",
        permanent: true,
      },
      {
        source: "/demo/08-creator-claw.png",
        destination: "/demo/08-creator.png",
        permanent: true,
      },
      // Press kit — drop internal G-code from public asset URL
      {
        source: "/press/curxor-press-kit-g3.zip",
        destination: "/press/curxor-press-kit.zip",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
