import Link from "next/link";

import { comparisonOptions } from "@/lib/config";

export function ComparisonTable() {
  const competitors = comparisonOptions.filter((option) => option.negative);
  const curxor = comparisonOptions.find((option) => !option.negative);

  if (!curxor) return null;

  return (
    <section id="compare" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              WHY CURXOR
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Not Another Cloud Bill
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed tracking-wide text-white/40">
            Cloud APIs, rented Mac agents, DIY OpenClaw, or lightweight Jetson
            boxes — or one independent computer with Flight Command built in.
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {competitors.map((option) => (
            <ComparisonCard key={option.id} option={option} />
          ))}
        </div>

        <div className="mt-px border border-neon-purple/40 bg-neon-purple/[0.03] p-8 ring-1 ring-inset ring-neon-purple/40 lg:p-10">
          <p className="mb-4 text-[10px] tracking-[0.25em] text-neon-purple">
            RECOMMENDED · INDEPENDENT COMPUTER
          </p>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="mb-2 text-[10px] tracking-[0.25em] text-white/30">
                {curxor.label}
              </p>
              <p className="text-3xl font-bold text-neon-purple">{curxor.price}</p>
            </div>
            <ul className="grid flex-1 gap-4 sm:grid-cols-2 lg:max-w-3xl">
              {curxor.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-neon-purple" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 border border-neon-purple/50 px-5 py-3 text-xs tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
          >
            SEE UMA TIERS <span>→</span>
          </Link>
          <Link
            href="#faq"
            className="text-xs tracking-widest text-white/35 transition-colors hover:text-neon-purple"
          >
            OPENCLAW &amp; CLAWBOX FAQ →
          </Link>
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
  return (
    <div className="bg-black p-6 lg:p-8">
      <p className="mb-2 text-[10px] tracking-[0.25em] text-white/30">
        {option.label}
      </p>
      <p className="mb-6 text-xl font-bold text-white/50 lg:text-2xl">
        {option.price}
      </p>
      <ul className="space-y-3">
        {option.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 text-xs leading-relaxed text-white/60 lg:text-sm"
          >
            <span className="mt-2 h-1 w-1 shrink-0 bg-white/30" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
