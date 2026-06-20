import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { pressKit } from "@/lib/press";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Press Kit — ${siteConfig.name}`,
  description: "Boilerplate, facts, and assets for CurXor media and investor outreach.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          MEDIA
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Press Kit
        </h1>
        <p className="mt-4 text-sm text-white/50">
          Copy-paste boilerplate and facts for articles, podcasts, and investor
          decks.
        </p>

        <section className="mt-12 border-industrial bg-black p-8">
          <h2 className="text-xs font-bold tracking-[0.3em] text-neon-purple">
            HEADLINE
          </h2>
          <p className="mt-4 text-xl font-bold tracking-tight">
            {pressKit.headline}
          </p>
        </section>

        <section className="mt-8 border-industrial bg-black p-8">
          <h2 className="text-xs font-bold tracking-[0.3em] text-neon-purple">
            BOILERPLATE
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {pressKit.boilerplate}
          </p>
        </section>

        <section className="mt-8 border-industrial bg-black p-8">
          <h2 className="text-xs font-bold tracking-[0.3em] text-neon-purple">
            FOUNDER QUOTE
          </h2>
          <p className="mt-4 text-sm italic leading-relaxed text-white/70">
            &ldquo;{pressKit.founderQuote}&rdquo;
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-neon-purple">
            FACT SHEET
          </h2>
          <dl className="space-y-4 border border-white/10">
            {pressKit.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-2 border-b border-white/10 bg-black px-6 py-4 last:border-b-0 sm:grid-cols-[140px_1fr]"
              >
                <dt className="text-[10px] tracking-widest text-white/40">
                  {fact.label}
                </dt>
                <dd className="text-sm text-white/80">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-neon-purple">
            ASSETS
          </h2>
          <ul className="space-y-3">
            {pressKit.assets.map((asset) => (
              <li key={asset.path} className="text-sm text-white/60">
                <Link
                  href={asset.path}
                  className="text-neon-purple hover:underline"
                >
                  {asset.label}
                </Link>
                <span className="text-white/30"> — {asset.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 text-sm text-white/50">
          <p>
            Contact:{" "}
            <a
              href={`mailto:${pressKit.contactEmail}`}
              className="text-neon-purple hover:underline"
            >
              {pressKit.contactEmail}
            </a>{" "}
            ·{" "}
            <a
              href={siteConfig.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-purple hover:underline"
            >
              {siteConfig.twitterHandle}
            </a>
          </p>
          <p className="mt-8">
            <Link href="/" className="text-neon-purple hover:underline">
              ← Back to pre-order
            </Link>
          </p>
        </section>
      </div>
    </SiteShell>
  );
}
