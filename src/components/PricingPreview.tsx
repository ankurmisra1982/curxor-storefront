import Link from "next/link";

import { pricingTiers, pricingModels } from "@/lib/generated/pricing-sync";

function roleLabel(role: string): string {
  if (role === "vla") return "vision + action";
  return role;
}

export function PricingPreview() {
  return (
    <section id="pricing" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              LOCAL MODEL BUDGETS
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              UMA Tiers, Not Subscription Tiers
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed tracking-wide text-white/40">
            Every CurXor appliance is the same hardware. These tiers show how much of
            the 64 GB UMA budget you assign to local models.
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
          {pricingTiers.map((tier) => {
            const models = pricingModels.filter((model) =>
              model.tiers.some((supportedTier) => supportedTier === tier.id),
            );
            return (
              <article key={tier.id} className="bg-black p-8">
                <p className="mb-2 text-[10px] tracking-[0.25em] text-neon-purple">
                  {tier.label.toUpperCase()}
                </p>
                <h3 className="text-3xl font-bold text-white">{tier.umaCapGb} GB UMA</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {tier.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {models.slice(0, 3).map((model) => (
                    <li key={model.id} className="text-sm text-white/75">
                      <span className="text-white/95">{model.name}</span>
                      <span className="text-white/35">
                        {" "}
                        · {roleLabel(model.role)} · {model.tokensPerSec} tok/s
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 border border-neon-purple/50 px-5 py-3 text-xs tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
          >
            FULL PRICING + MODEL MATRIX <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
