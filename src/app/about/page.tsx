import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MissionVisionSection } from "@/components/MissionVisionSection";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { siteConfig } from "@/lib/config";
import { productStills } from "@/lib/product-stills";

const aboutTitle = `About — ${siteConfig.name}`;
const aboutDescription =
  "CurXor mission, vision, and purpose: make the operator the principal of their AI — companions on metal they own. Desk appliance with CurXor OS, $3,999 once.";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: `${siteConfig.siteUrl}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <p className="max-w-2xl text-sm leading-relaxed text-white/45">
          CurXor builds the sovereign AI desk — hardware you own, CurXor OS,
          and an AI team that extends how you think and work. Not a rented tab.
        </p>
        <div className="mt-8">
          <SubscribeFirstCtas
            preorderLocation="about"
            secondaryHref="/#how-it-works"
            secondaryLabel="See how it works"
          />
        </div>

        <figure className="mt-12 max-w-2xl border border-white/10 bg-black">
          <Image
            src={productStills.b.src}
            alt={productStills.b.alt}
            width={productStills.b.width}
            height={productStills.b.height}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 42rem"
            priority
          />
          <figcaption className="border-t border-white/10 px-4 py-3 text-[10px] leading-relaxed tracking-wide text-white/35">
            {productStills.honesty}
          </figcaption>
        </figure>
      </div>

      <MissionVisionSection variant="about" />

      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-10">
        <p className="text-xs text-white/35">
          Product story and pricing:{" "}
          <Link href="/" className="text-neon-purple hover:underline">
            curxor.ai
          </Link>
          {" · "}
          <Link href="/journal" className="text-neon-purple hover:underline">
            Journal
          </Link>
          {" · "}
          <Link href="/press" className="text-neon-purple hover:underline">
            Press kit
          </Link>
          {" · "}
          <Link href="/architecture" className="text-neon-purple hover:underline">
            Architecture
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
