import { computePower } from "@/lib/config";
import { InfoTip } from "@/components/InfoTip";
import type { BuyerTipId } from "@/lib/buyer-tips";

const statTipByLabel: Partial<Record<string, BuyerTipId>> = {
  "NPU INFERENCE": "tops",
  "LPDDR5X UMA": "uma",
};

/** Specs sit below the hero — keeps first viewport on brand + H1 + CTA + visual. */
export function HeroSpecStrip() {
  return (
    <section aria-label="Hardware highlights" className="border-b border-white/10">
      <div className="band-bar mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-6">
        {computePower.stats.slice(0, 4).map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-4">
            {i > 0 ? <div className="hidden h-6 w-px bg-white/10 sm:block" aria-hidden /> : null}
            <div>
              <div className="text-base font-bold text-neon-purple sm:text-lg">
                {stat.value}
                <span className="ml-1 text-xs text-white/60">{stat.unit}</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] tracking-widest text-white/60">
                {stat.label}
                {statTipByLabel[stat.label] ? (
                  <InfoTip tipId={statTipByLabel[stat.label]!} />
                ) : null}
              </div>
            </div>
          </div>
        ))}
        <p className="ml-auto hidden text-xs text-white/55 lg:block">
          ChatGPT bills per token. CurXor bills once.
        </p>
      </div>
    </section>
  );
}
