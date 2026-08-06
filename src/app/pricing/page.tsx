import type { Metadata } from "next";
import Link from "next/link";

import { ComputeLadder } from "@/components/ComputeLadder";
import { OpenWeightTierCompare } from "@/components/OpenWeightTierCompare";
import { InfoTip } from "@/components/InfoTip";
import { JsonLd } from "@/components/JsonLd";
import { PricingModelMatrix } from "@/components/PricingModelMatrix";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { priceCard, pricingEvolutionBlurb } from "@/lib/compute-ladder";
import { siteConfig } from "@/lib/config";

const pricingTitle = `Pricing — ${siteConfig.name}`;
const pricingDescription =
  "$3,999 once for the CurXor desk appliance — join the waitlist. Local UMA tiers (Economy, Balanced, Performance) on the same box. $0/mo CurXor API rent.";

export const metadata: Metadata = {
  title: pricingTitle,
  description: pricingDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: pricingTitle,
    description: pricingDescription,
    url: `${siteConfig.siteUrl}/pricing`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pricingTitle,
    description: pricingDescription,
  },
};

export default function PricingPage() {
  return (
    <SiteShell>
      <JsonLd product organization={false} />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          PRICING
        </p>
        <h1 className="flex flex-wrap items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
          One Hardware Price. Multiple Local Model Budgets.
          <InfoTip tipId="umaTiers" className="mt-1" />
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60">
          CurXor is <span className="text-white/80">{siteConfig.preOrderPrice}</span>{" "}
          once for the appliance. Economy, Balanced, and Performance are not SaaS
          plans; they are recommended UMA allocations for local models on the same
          64 GB system.
        </p>

        <section className="mt-10 surface-accent p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            {priceCard.eyebrow}
          </p>
          <p className="mt-3 flex items-baseline gap-3">
            <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {priceCard.price}
            </span>
            <span className="text-sm text-white/60">{priceCard.cadence}</span>
          </p>
          <p className="mt-2 text-sm text-white/60">{priceCard.sub}</p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {priceCard.includes.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-white/70"
              >
                <span aria-hidden="true" className="text-neon-purple">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <SubscribeFirstCtas
              preorderLocation="pricing"
              secondaryHref="/#demo"
              secondaryLabel="See Flight Command"
            />
          </div>

          <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/55">
            {priceCard.honesty}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/55">
            {priceCard.shipping}{" "}
            <Link href="/terms" className="text-neon-purple hover:underline">
              Pre-order terms
            </Link>
          </p>
        </section>

        <div className="mt-8">
          <OpenWeightTierCompare variant="pricing" />
        </div>

        <ComputeLadder />

        <div className="mt-14 surface p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            {pricingEvolutionBlurb.eyebrow}
          </p>
          {pricingEvolutionBlurb.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-3 text-sm leading-relaxed text-white/60 first:mt-3"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <PricingModelMatrix />

        <div className="mt-14 surface p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            BEYOND HARDWARE
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            CurXor is a capital expense once — compare cloud rent, assistant
            subscriptions, and other paths with visible assumptions on the{" "}
            <Link href="/compare#tco" className="text-neon-purple hover:underline">
              illustrative spend scenarios
            </Link>{" "}
            table.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="surface p-6">
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">WHAT CHANGES</p>
            <p className="mt-3 flex flex-wrap items-center gap-1.5 text-sm leading-relaxed text-white/60">
              <span>
                Model quality, vision depth, and whether you budget enough UMA for VLA
                workloads.
              </span>
              <InfoTip tipId="vla" className="shrink-0" />
            </p>
          </div>
          <div className="surface p-6">
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">WHAT DOESN&apos;T</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              The hardware price, Home/Settings/Forge UI, and the option to stay fully
              local by default.
            </p>
          </div>
          <div className="surface p-6">
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">OPTIONAL CLOUD</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Frontier models remain bring-your-own-key. They are optional and not part
              of CurXor pricing.
            </p>
          </div>
        </div>

        <section className="mt-14 surface-accent p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            ONE PRICE, ONE BOX
          </p>
          <p className="mt-3 max-w-2xl text-lg font-bold tracking-tight text-white/90">
            {siteConfig.preOrderPrice} once for the appliance. Everything above is
            a memory setting, not another invoice.
          </p>
          <div className="mt-6">
            <SubscribeFirstCtas
              preorderLocation="pricing-footer"
              secondaryHref="/compare"
              secondaryLabel="Compare alternatives"
            />
          </div>
        </section>

        <p className="mt-12">
          <Link href="/" className="text-sm text-neon-purple hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
