import Link from "next/link";

import { ShareOnX } from "@/components/ShareOnX";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import type { ComparePage } from "@/lib/compare-pages";
import { comparePages } from "@/lib/compare-pages";
import { siteConfig } from "@/lib/config";

export function ComparePageContent({ page }: { page: ComparePage }) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
        {page.eyebrow}
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {page.headline}
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/50">
        {page.lead}
      </p>

      <div className="mt-8 space-y-4">
        <SubscribeFirstCtas
          preorderLocation="compare"
          secondaryHref="/#operators"
          secondaryLabel="Meet operators"
        />
        <ShareOnX
          text={`${page.headline} — ${siteConfig.heroHeadline} ${siteConfig.siteUrl}`}
          label="SHARE COMPARISON"
        />
      </div>

      <p className="mt-10 text-sm leading-relaxed text-white/55">
        {page.positioning}
      </p>

      <div className="mt-12 overflow-x-auto border border-white/10">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02] text-[10px] tracking-[0.2em] text-white/35">
              <th className="p-4 font-normal">FEATURE</th>
              <th className="p-4 font-normal">{page.themLabel.toUpperCase()}</th>
              <th className="p-4 font-normal text-neon-purple">CURXOR</th>
            </tr>
          </thead>
          <tbody>
            {page.rows.map((row) => (
              <tr key={row.label} className="border-b border-white/10">
                <td className="p-4 font-bold text-white/75">{row.label}</td>
                <td className="p-4 text-white/50">{row.them}</td>
                <td className="p-4 text-white/80">{row.curxor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="border-industrial p-6">
          <p className="text-[10px] tracking-[0.25em] text-white/35">
            CHOOSE {page.themLabel.toUpperCase()}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            {page.whoShouldBuyThem}
          </p>
        </div>
        <div className="border border-neon-purple/30 bg-neon-purple/[0.03] p-6">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            CHOOSE CURXOR
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {page.whoShouldBuyCurxor}
          </p>
        </div>
      </div>

      <section className="mt-16">
        <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
          MORE COMPARISONS
        </p>
        <div className="flex flex-wrap gap-3">
          {comparePages
            .filter((other) => other.slug !== page.slug)
            .map((other) => (
              <Link
                key={other.slug}
                href={`/compare/${other.slug}`}
                className="border border-white/10 px-4 py-2 text-[10px] tracking-widest text-white/50 transition-colors hover:border-neon-purple/40 hover:text-neon-purple"
              >
                {other.title.toUpperCase()}
              </Link>
            ))}
        </div>
      </section>

      <p className="mt-12">
        <Link href="/" className="text-sm text-neon-purple hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
