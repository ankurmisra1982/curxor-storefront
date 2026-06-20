import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollDepthTracker } from "@/components/ScrollDepthTracker";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "CurXor — Vibe-Code the Physical World",
  description:
    "The Sovereign Edge Nexus for Physical AI. Locally control robotics without cloud latency.",
  icons: { icon: "/favicon.svg" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CurXor — Vibe-Code the Physical World",
    description:
      "The Sovereign Edge Nexus for Physical AI. Locally control robotics without cloud latency.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: "CurXor — Vibe-Code the Physical World",
    description:
      "The Sovereign Edge Nexus for Physical AI. Locally control robotics without cloud latency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <ScrollDepthTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
