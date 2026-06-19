import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.curxor.ai" }],
        destination: "https://curxor.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
