import Link from "next/link";

import { InfoTip } from "@/components/InfoTip";
import { pricingTiers } from "@/lib/generated/pricing-sync";

export function PricingPreview() {
  return (
    <section id="pricing" className="relative border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              LOCAL MODEL BUDGETS
            </p>
            <h2 className="flex flex-wrap items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Same hardware. Your UMA tier.
              <InfoTip tipId="umaTiers" className="mt-1" />
            </h2>
          </div>
          <p className="max-w-sm text-xs text-white/40">
            Assign how much of 64 GB goes to local models — not a subscription ladder.
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article key={tier.id} className="bg-black p-6 sm:p-8">
              <p className="text-[10px] tracking-[0.25em] text-neon-purple">
                {tier.label.toUpperCase()}
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white">
                {tier.umaCapGb} GB UMA
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {tier.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 border border-neon-purple/50 px-5 py-3 text-xs tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
          >
            MODEL MATRIX + PRE-ORDER <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
