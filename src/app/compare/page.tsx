import Link from "next/link";

import { SiteShell } from "@/components/SiteShell";
import { TcoSection } from "@/components/TcoSection";
import { comparePages } from "@/lib/compare-pages";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `Compare — ${siteConfig.name}`,
  description:
    "CurXor vs ClawBox, Perplexity Personal Computer, MIKY, Mac Studio + Ollama, and NVIDIA NemoClaw.",
  alternates: { canonical: "/compare" },
};

export default function CompareHubPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          WHY CURXOR
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Compare CurXor
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
          Honest comparisons against the alternatives buyers actually evaluate —
          light assistants, cloud orchestration, independent computers, DIY
          inference, and governance stacks.
        </p>

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
      </div>

      <TcoSection />

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <Link href="/#compare" className="text-sm text-neon-purple hover:underline">
          ← Back to homepage comparison
        </Link>
      </div>
    </SiteShell>
  );
}
