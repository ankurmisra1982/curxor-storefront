import type { Metadata } from "next";
import Link from "next/link";

import { ComputeLadder } from "@/components/ComputeLadder";
import { OpenWeightTierCompare } from "@/components/OpenWeightTierCompare";
import { InfoTip } from "@/components/InfoTip";
import { JsonLd } from "@/components/JsonLd";
import { PricingModelMatrix } from "@/components/PricingModelMatrix";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { pricingEvolutionBlurb } from "@/lib/compute-ladder";
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

        <div className="mt-8">
          <SubscribeFirstCtas
            preorderLocation="pricing"
            secondaryHref="/#demo"
            secondaryLabel="See Flight Command"
          />
        </div>

        <div className="mt-8">
          <OpenWeightTierCompare variant="pricing" />
        </div>

        <ComputeLadder />

        <div className="mt-14 border-industrial bg-black p-6 sm:p-8">
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

        <div className="mt-14 border-industrial bg-black p-6 sm:p-8">
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
          <div className="border-industrial bg-black p-6">
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">WHAT CHANGES</p>
            <p className="mt-3 flex flex-wrap items-center gap-1.5 text-sm leading-relaxed text-white/60">
              <span>
                Model quality, vision depth, and whether you budget enough UMA for VLA
                workloads.
              </span>
              <InfoTip tipId="vla" className="shrink-0" />
            </p>
          </div>
          <div className="border-industrial bg-black p-6">
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">WHAT DOESN&apos;T</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              The hardware price, Home/Settings/Forge UI, and the option to stay fully
              local by default.
            </p>
          </div>
          <div className="border-industrial bg-black p-6">
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">OPTIONAL CLOUD</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Frontier models remain bring-your-own-key. They are optional and not part
              of CurXor pricing.
            </p>
          </div>
        </div>

        <p className="mt-12">
          <Link href="/" className="text-sm text-neon-purple hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
