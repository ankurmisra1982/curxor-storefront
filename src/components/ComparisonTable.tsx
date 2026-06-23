import Link from "next/link";

import { InfoTip } from "@/components/InfoTip";
import { comparisonOptions } from "@/lib/config";
import { homepageCostHook } from "@/lib/marketing";

const homepageCompetitorIds = ["cloud", "perplexity", "diy"] as const;

const compareHrefById: Partial<
  Record<(typeof comparisonOptions)[number]["id"], string>
> = {
  clawbox: "/compare/clawbox",
  perplexity: "/compare/perplexity-personal-computer",
  miky: "/compare/miky",
  diy: "/compare/mac-studio-ollama",
  "openclaw-diy": "/compare/nemoclaw",
};

export function ComparisonTable() {
  const competitors = comparisonOptions.filter((option) =>
    homepageCompetitorIds.includes(
      option.id as (typeof homepageCompetitorIds)[number]
    )
  );
  const curxor = comparisonOptions.find((option) => !option.negative);

  if (!curxor) return null;

  return (
    <section id="compare" className="relative border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              WHY CURXOR
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Not another cloud bill
            </h2>
          </div>
          <p className="max-w-sm text-xs text-white/40">
            Pay once. Own the silicon. Keep your playbook on metal.
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {competitors.map((option) => (
            <ComparisonCard key={option.id} option={option} />
          ))}
        </div>

        <div className="mt-px border border-neon-purple/40 bg-neon-purple/[0.03] p-6 ring-1 ring-inset ring-neon-purple/40 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="shrink-0">
              <p className="text-[10px] tracking-[0.25em] text-neon-purple">
                RECOMMENDED
              </p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-white/30">
                {curxor.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-neon-purple">
                {curxor.price}
              </p>
            </div>
            <ul className="grid flex-1 gap-3 sm:grid-cols-2">
              {curxor.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm leading-snug text-white/75"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-neon-purple" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border border-white/10 bg-black p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            {homepageCostHook.eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {homepageCostHook.headline}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
            {homepageCostHook.subhead}
          </p>

          <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            <div className="bg-black p-5">
              <p className="text-[10px] tracking-widest text-white/35">
                {homepageCostHook.cloud.label}
              </p>
              <p className="mt-2 text-xl font-bold text-white/70">
                {homepageCostHook.cloud.monthly}
              </p>
              <p className="mt-1 text-xs text-white/45">
                {homepageCostHook.cloud.fourYear}
              </p>
              <p className="mt-2 text-[10px] text-white/35">
                {homepageCostHook.cloud.note}
              </p>
            </div>
            <div className="bg-black p-5 ring-1 ring-inset ring-neon-purple/30">
              <p className="text-[10px] tracking-widest text-neon-purple/80">
                {homepageCostHook.curxor.label}
              </p>
              <p className="mt-2 text-xl font-bold text-neon-purple">
                {homepageCostHook.curxor.upfront}
              </p>
              <p className="mt-1 text-xs text-white/55">
                {homepageCostHook.curxor.monthly} · {homepageCostHook.curxor.note}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/60">
            <span className="font-bold text-white/80">
              {homepageCostHook.breakeven.math}
            </span>
            <span className="text-white/40">
              {" "}
              — {homepageCostHook.breakeven.detail}
            </span>
          </p>
          <p className="mt-3 text-[10px] leading-relaxed text-white/30">
            {homepageCostHook.honesty}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 border border-neon-purple/50 px-5 py-3 text-xs tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
          >
            ALL COMPARISONS <span>→</span>
          </Link>
          <span className="inline-flex items-center gap-1.5">
            <Link
              href="/pricing"
              className="text-xs tracking-widest text-white/35 transition-colors hover:text-neon-purple"
            >
              UMA TIERS →
            </Link>
            <InfoTip tipId="umaTiers" />
          </span>
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({
  option,
}: {
  option: (typeof comparisonOptions)[number];
}) {
  const compareHref = compareHrefById[option.id];

  return (
    <div className="bg-black p-5 sm:p-6">
      <p className="text-[10px] tracking-[0.25em] text-white/30">
        {option.label}
      </p>
      <p className="mb-4 mt-1 text-xl font-bold text-white/50">{option.price}</p>
      <ul className="space-y-2">
        {option.highlights.slice(0, 3).map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-xs leading-relaxed text-white/55"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 bg-white/30" />
            {highlight}
          </li>
        ))}
      </ul>
      {compareHref ? (
        <Link
          href={compareHref}
          className="mt-4 inline-block text-[10px] tracking-widest text-white/35 transition-colors hover:text-neon-purple"
        >
          DEEP COMPARE →
        </Link>
      ) : null}
    </div>
  );
}
