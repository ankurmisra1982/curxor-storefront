import type { Metadata } from "next";
import Link from "next/link";

import { ComputeLadder } from "@/components/ComputeLadder";
import { InfoTip } from "@/components/InfoTip";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
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
        <h1 className="flex flex-wrap items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
          One Hardware Price. Multiple Local Model Budgets.
          <InfoTip tipId="umaTiers" className="mt-1" />
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/50">
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

        <ComputeLadder />

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
      </div>
    </SiteShell>
  );
}
