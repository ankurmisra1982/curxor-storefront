import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CurXor — Vibe-Code the Physical World",
  description:
    "The Sovereign Edge Nexus for Physical AI. Locally control robotics without cloud latency.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "CurXor — Vibe-Code the Physical World",
    description: "The Sovereign Edge Nexus for Physical AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
