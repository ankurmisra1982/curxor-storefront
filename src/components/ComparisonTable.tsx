import Link from "next/link";

import { InfoTip } from "@/components/InfoTip";
import { comparisonOptions } from "@/lib/config";

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
            Rent inference forever — or own it once on your desk.
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
              <p className="mt-1 text-xs text-white/50">
                $0/mo CurXor API · optional BYOK only
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
