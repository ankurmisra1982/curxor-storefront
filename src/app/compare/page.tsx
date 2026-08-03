import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { TcoSection } from "@/components/TcoSection";
import { comparePages } from "@/lib/compare-pages";
import { siteConfig } from "@/lib/config";

const compareTitle = `Compare — ${siteConfig.name}`;
const compareDescription =
  "CurXor vs ClawBox, Perplexity Personal Computer, MIKY, Mac Studio + Ollama, and NVIDIA NemoClaw.";

export const metadata = {
  title: compareTitle,
  description: compareDescription,
  alternates: { canonical: "/compare" },
  openGraph: {
    title: compareTitle,
    description: compareDescription,
    url: `${siteConfig.siteUrl}/compare`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: compareTitle,
    description: compareDescription,
  },
};

export default function CompareHubPage() {
  return (
    <SiteShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          WHY CURXOR
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Compare CurXor
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
          Honest comparisons for operators evaluating alternatives — light
          assistants, cloud orchestration, independent computers, DIY inference,
          and governance stacks. For longer takes, see the{" "}
          <Link href="/journal" className="text-neon-purple hover:underline">
            journal
          </Link>
          .
        </p>

        <div className="mt-8">
          <SubscribeFirstCtas preorderLocation="compare" secondaryHref="/#demo" secondaryLabel="See Flight Command" />
        </div>

        <ul className="mt-12 space-y-4">
          {comparePages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/compare/${page.slug}`}
                className="group block border-industrial p-6 transition-colors hover:border-neon-purple/40"
              >
                <p className="text-[10px] tracking-[0.2em] text-neon-purple">
                  {page.eyebrow}
                </p>
                <h2 className="mt-2 text-lg font-bold group-hover:text-neon-purple">
                  {page.title}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-white/45">
                  {page.lead}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[10px] tracking-[0.3em] text-white/40">JOURNAL</p>
          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li>
              <Link
                href="/journal/appliance-not-diy"
                className="text-sm text-neon-purple hover:underline"
              >
                The appliance, not the weekend project →
              </Link>
            </li>
            <li>
              <Link
                href="/journal/mint-autonomous-employees"
                className="text-sm text-neon-purple hover:underline"
              >
                Mint autonomous employees →
              </Link>
            </li>
            <li>
              <Link
                href="/journal/working-product-on-real-metal"
                className="text-sm text-neon-purple hover:underline"
              >
                Working product on real metal →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <TcoSection />

      <div className="mx-auto max-w-6xl px-6 pb-16">
        <Link href="/" className="text-sm text-neon-purple hover:underline">
          ← Back to home
        </Link>
      </div>
    </SiteShell>
  );
}
