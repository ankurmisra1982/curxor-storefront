import Link from "next/link";

import { ShareOnX } from "@/components/ShareOnX";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import type { ComparePage } from "@/lib/compare-pages";
import { comparePages } from "@/lib/compare-pages";
import { siteConfig } from "@/lib/config";

export function ComparePageContent({ page }: { page: ComparePage }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
      <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
        {page.eyebrow}
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {page.headline}
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65">
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

      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-white/65">
        {page.positioning}
      </p>

      <div className="mt-12 overflow-x-auto border border-white/10">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02] text-[10px] tracking-[0.2em] text-white/55">
              <th className="p-4 font-normal">FEATURE</th>
              <th className="p-4 font-normal">{page.themLabel.toUpperCase()}</th>
              <th className="p-4 font-normal text-neon-purple">CURXOR</th>
            </tr>
          </thead>
          <tbody>
            {page.rows.map((row) => (
              <tr key={row.label} className="border-b border-white/10">
                <td className="p-4 font-bold text-white/75">{row.label}</td>
                <td className="p-4 text-white/60">{row.them}</td>
                <td className="p-4 text-white/80">{row.curxor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="border-industrial p-6">
          <p className="text-[10px] tracking-[0.25em] text-white/55">
            CHOOSE {page.themLabel.toUpperCase()}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            {page.whoShouldBuyThem}
          </p>
        </div>
        <div className="surface-accent p-6">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            CHOOSE CURXOR
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {page.whoShouldBuyCurxor}
          </p>
        </div>
      </div>

      <section className="mt-16">
        <p className="mb-4 text-[10px] tracking-[0.25em] text-white/55">
          MORE COMPARISONS
        </p>
        <div className="flex flex-wrap gap-3">
          {comparePages
            .filter((other) => other.slug !== page.slug)
            .map((other) => (
              <Link
                key={other.slug}
                href={`/compare/${other.slug}`}
                className="border border-white/10 px-4 py-2 text-[10px] tracking-widest text-white/60 transition-colors hover:border-neon-purple/40 hover:text-neon-purple"
              >
                {other.title.toUpperCase()}
              </Link>
            ))}
        </div>
      </section>

      <section className="mt-10 border-t border-white/10 pt-8">
        <p className="mb-4 text-[10px] tracking-[0.25em] text-white/55">
          JOURNAL
        </p>
        <ul className="flex flex-col gap-3">
          {page.slug === "mac-studio-ollama" ? (
            <li>
              <Link
                href="/journal/appliance-not-diy"
                className="text-sm text-neon-purple hover:underline"
              >
                The appliance, not the weekend project →
              </Link>
            </li>
          ) : null}
          <li>
            <Link
              href="/journal/mint-autonomous-employees"
              className="text-sm text-neon-purple hover:underline"
            >
              Mint autonomous employees on bare metal →
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
          <li>
            <Link
              href="/journal"
              className="text-sm text-white/60 hover:text-neon-purple"
            >
              All journal →
            </Link>
          </li>
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
        <Link href="/compare" className="text-sm text-neon-purple hover:underline">
          ← All comparisons
        </Link>
        <Link href="/" className="text-sm text-neon-purple hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
