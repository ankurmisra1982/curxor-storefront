import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { JournalIndex } from "@/components/JournalIndex";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { siteConfig } from "@/lib/config";
import { journalEssaysNewestFirst, journalIndexMeta } from "@/lib/journal";

const title = `${journalIndexMeta.title} — ${siteConfig.name}`;

export const metadata: Metadata = {
  title,
  description: journalIndexMeta.description,
  alternates: { canonical: "/journal" },
  openGraph: {
    title,
    description: journalIndexMeta.description,
    url: `${siteConfig.siteUrl}/journal`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: journalIndexMeta.description,
  },
};

export default function JournalIndexPage() {
  const entries = journalEssaysNewestFirst();

  return (
    <SiteShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
        ]}
      />
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-industrial opacity-40"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <p className="text-[10px] tracking-[0.3em] text-neon-purple">
            JOURNAL
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Essays, updates, releases
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Founder long-form, product status, OS release notes, and category
            briefs — selected for operators and search. Full changelog and press
            kit stay in the archives below.
          </p>
          <div className="mt-8">
            <SubscribeFirstCtas
              preorderLocation="journal"
              secondaryHref="/compare"
              secondaryLabel="Compare alternatives"
            />
          </div>
        </div>
      </div>

      <JournalIndex entries={entries} />
    </SiteShell>
  );
}
