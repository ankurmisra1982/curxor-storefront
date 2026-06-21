import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/SiteShell";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";
import { pricingModels, pricingTiers } from "@/lib/generated/pricing-sync";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Pricing — ${siteConfig.name}`,
  description:
    "CurXor pricing and local UMA tiers: Economy, Balanced, and Performance model budgets on the same appliance.",
  alternates: { canonical: "/pricing" },
};

function roleLabel(role: string): string {
  if (role === "vla") return "vision + action";
  return role;
}

export default function PricingPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          PRICING
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          One Hardware Price. Multiple Local Model Budgets.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/50">
          CurXor is <span className="text-white/80">{siteConfig.preOrderPrice}</span>{" "}
          once for the appliance. Economy, Balanced, and Performance are not SaaS
          plans; they are recommended UMA allocations for local models on the same
          64 GB system.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <TrackedPreorderLink
            location="hero"
            className="inline-flex items-center gap-2 bg-neon-purple px-6 py-4 text-xs font-bold tracking-[0.2em] text-black"
          >
            PRE-ORDER {siteConfig.preOrderPrice}
          </TrackedPreorderLink>
          <Link
            href="/#demo"
            className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/60 hover:border-neon-purple/50 hover:text-neon-purple"
          >
            SEE FLIGHT COMMAND
          </Link>
        </div>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
          {pricingTiers.map((tier) => {
            const models = pricingModels.filter((model) =>
              model.tiers.some((supportedTier) => supportedTier === tier.id),
            );
            return (
              <article key={tier.id} className="bg-black p-8">
                <p className="mb-3 text-[10px] tracking-[0.25em] text-neon-purple">
                  {tier.label.toUpperCase()}
                </p>
                <h2 className="text-3xl font-bold text-white">{tier.umaCapGb} GB UMA</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {tier.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {models.map((model) => (
                    <li key={model.id} className="border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-bold text-white/90">{model.name}</span>
                        <span className="text-[10px] tracking-[0.25em] text-white/35">
                          {model.tokensPerSec} TOK/S
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/45">
                        {roleLabel(model.role)} · {model.umaGb} GB UMA · {model.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="border-industrial bg-black p-6">
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">WHAT CHANGES</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Model quality, vision depth, and whether you budget enough UMA for VLA
              workloads.
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
      </div>
    </SiteShell>
  );
}
