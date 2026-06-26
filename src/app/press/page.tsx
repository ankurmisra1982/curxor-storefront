import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/config";
import { investorDeckMailto, pressKit } from "@/lib/press";

export const metadata: Metadata = {
  title: `Press Kit — ${siteConfig.name}`,
  description: "Boilerplate, facts, and assets for CurXor media and investor outreach.",
  alternates: { canonical: "/press" },
};

const statusStyles = {
  Shipped: "text-neon-purple",
  "In progress": "text-amber-400",
  Pending: "text-white/40",
} as const;

function renderInlineBold(text: string): ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-white/90">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-bold tracking-[0.3em] text-neon-purple">
      {children}
    </h2>
  );
}

function IndustrialSection({
  children,
  className = "mt-8",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-industrial bg-black p-8 ${className}`}>
      {children}
    </section>
  );
}

export default function PressPage() {
  const { pageIntro } = pressKit;

  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          {pageIntro.eyebrow}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Press Kit
        </h1>
        <p className="mt-4 text-sm text-white/50">
          {pageIntro.lead}{" "}
          {pageIntro.technicalReadPrefix}{" "}
          {pageIntro.technicalReadLinks.map((link, index) => (
            <span key={link.href}>
              {index > 0 && " and "}
              <Link href={link.href} className="text-neon-purple hover:underline">
                {link.label}
              </Link>
            </span>
          ))}
          .
        </p>

        <IndustrialSection className="mt-12">
          <SectionEyebrow>{pressKit.investorIntro.eyebrow}</SectionEyebrow>
          <p className="mt-4 text-xl font-bold tracking-tight">
            {pressKit.investorIntro.headline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {pressKit.investorIntro.body}
          </p>
        </IndustrialSection>

        <IndustrialSection>
          <SectionEyebrow>FOUNDERS</SectionEyebrow>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {pressKit.founders.fundraisingStatus}
          </p>
          <ul className="mt-6 space-y-4">
            {pressKit.founders.bios.map((bio) => (
              <li key={bio.name} className="text-sm leading-relaxed text-white/70">
                <strong className="text-white/90">{bio.name}</strong> — {bio.role}.{" "}
                {bio.bio}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            {pressKit.founders.technicalCoFounderLine}
          </p>
        </IndustrialSection>

        <section className="mt-8">
          <SectionEyebrow>{pressKit.traction.headline.toUpperCase()}</SectionEyebrow>
          <div className="mt-6 border border-white/10">
            {pressKit.traction.rows.map((row) => (
              <div
                key={row.milestone}
                className="grid gap-2 border-b border-white/10 bg-black px-6 py-4 last:border-b-0 sm:grid-cols-[120px_1fr]"
              >
                <span
                  className={`text-[10px] font-bold tracking-widest ${statusStyles[row.status]}`}
                >
                  {row.status.toUpperCase()}
                </span>
                <p className="text-sm text-white/80">
                  {renderInlineBold(row.milestone)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            {pressKit.traction.footnote.split(pressKit.traction.footnoteLink.label)[0]}
            <Link
              href={pressKit.traction.footnoteLink.href}
              className="text-neon-purple hover:underline"
            >
              {pressKit.traction.footnoteLink.label}
            </Link>
            .
          </p>
        </section>

        <IndustrialSection>
          <SectionEyebrow>BUSINESS MODEL</SectionEyebrow>
          <p className="mt-4 text-lg font-bold tracking-tight">
            {pressKit.businessModel.headline}
          </p>
          <p className="mt-6 text-[10px] tracking-widest text-white/40">NOW</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-white/70">
            {pressKit.businessModel.now.map((item) => (
              <li key={item}>
                {item.startsWith("Stripe pre-order") ? (
                  <>
                    Stripe pre-order at{" "}
                    <Link href="/pricing" className="text-neon-purple hover:underline">
                      /pricing
                    </Link>
                  </>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[10px] tracking-widest text-white/40">
            EXPANSION (FORWARD-LOOKING)
          </p>
          <p className="mt-2 text-sm text-white/70">
            {pressKit.businessModel.expansion.join(" · ")}
          </p>
          <p className="mt-6 text-xs leading-relaxed text-white/50">
            {pressKit.businessModel.wedgeNote}{" "}
            <Link
              href={pressKit.businessModel.wedgeNoteLink.href}
              className="text-neon-purple hover:underline"
            >
              {pressKit.businessModel.wedgeNoteLink.label}
            </Link>{" "}
            {pressKit.businessModel.wedgeNoteSuffix}
          </p>
        </IndustrialSection>

        <IndustrialSection>
          <SectionEyebrow>WHY CURXOR</SectionEyebrow>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-white/70">
            {pressKit.whyCurXor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </IndustrialSection>

        <section id="diligence" className="mt-8 scroll-mt-24">
          <SectionEyebrow>
            {pressKit.diligencePath.headline.toUpperCase()}
          </SectionEyebrow>
          <ul className="mt-6 space-y-4">
            {pressKit.diligencePath.links.map((link) => (
              <li key={link.href} className="border border-white/10 bg-black px-6 py-4">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neon-purple hover:underline"
                >
                  {link.label}
                </Link>
                <p className="mt-1 text-xs text-white/40">{link.why}</p>
              </li>
            ))}
          </ul>
        </section>

        <IndustrialSection>
          <SectionEyebrow>{pressKit.focusAsk.headline.toUpperCase()}</SectionEyebrow>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-white/70">
            {pressKit.focusAsk.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/50">
            <a
              href={pressKit.focusAsk.mailto}
              className="text-neon-purple hover:underline"
            >
              {pressKit.focusAsk.contactCta}
            </a>
          </p>
        </IndustrialSection>

        <IndustrialSection>
          <SectionEyebrow>{pressKit.deck.eyebrow}</SectionEyebrow>
          <p className="mt-4 text-xl font-bold tracking-tight">
            {pressKit.deck.headline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {pressKit.deck.body}
          </p>
          <a
            href={pressKit.deck.mailto}
            className="mt-6 inline-block border border-neon-purple bg-neon-purple/10 px-6 py-3 text-xs font-bold tracking-widest text-neon-purple transition-all hover:bg-neon-purple/20 hover:shadow-[0_0_20px_rgba(191,90,242,0.3)]"
          >
            {pressKit.deck.ctaLabel}
          </a>
        </IndustrialSection>

        <section className="mt-8 border border-white/10 bg-black/50 p-6">
          <p className="text-xs leading-relaxed text-white/40">
            {pressKit.maturityDisclaimer}
          </p>
        </section>

        <IndustrialSection className="mt-12">
          <SectionEyebrow>HEADLINE</SectionEyebrow>
          <p className="mt-4 text-xl font-bold tracking-tight">
            {pressKit.headline}
          </p>
        </IndustrialSection>

        <IndustrialSection>
          <SectionEyebrow>BOILERPLATE</SectionEyebrow>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {pressKit.boilerplate}
          </p>
        </IndustrialSection>

        <IndustrialSection>
          <SectionEyebrow>FOUNDER QUOTE</SectionEyebrow>
          <p className="mt-4 text-sm italic leading-relaxed text-white/70">
            &ldquo;{pressKit.founderQuote}&rdquo;
          </p>
        </IndustrialSection>

        <section className="mt-12">
          <SectionEyebrow>FACT SHEET</SectionEyebrow>
          <dl className="mt-6 space-y-4 border border-white/10">
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
          <SectionEyebrow>ASSETS</SectionEyebrow>
          <ul className="mt-6 space-y-3">
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
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span>
              Contact:{" "}
              <a
                href={`mailto:${pressKit.contactEmail}`}
                className="text-neon-purple hover:underline"
              >
                {pressKit.contactEmail}
              </a>
            </span>
            <span aria-hidden="true">·</span>
            <SocialLinks
              className="inline-flex flex-wrap gap-x-3 gap-y-1"
              linkClassName="text-neon-purple hover:underline"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/" className="text-neon-purple hover:underline">
              ← Back to home
            </Link>
            <Link
              href="/architecture#validation"
              className="text-neon-purple hover:underline"
            >
              Architecture & validation
            </Link>
            <a href={investorDeckMailto} className="text-neon-purple hover:underline">
              Request investor deck
            </a>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
