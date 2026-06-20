import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/JsonLd";
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
  title: siteConfig.pageTitle,
  description: siteConfig.metaDescription,
  keywords: [...siteConfig.keywords],
  icons: { icon: "/favicon.svg" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.pageTitle,
    description: siteConfig.metaDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.pageTitle,
    description: siteConfig.metaDescription,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="min-h-screen overflow-x-hidden pb-20 md:pb-0">
        <JsonLd />
        {children}
        <ScrollDepthTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
