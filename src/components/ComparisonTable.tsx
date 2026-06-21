import Link from "next/link";

import { comparisonOptions } from "@/lib/config";

export function ComparisonTable() {
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
          <p className="max-w-sm text-xs leading-relaxed tracking-wide text-white/40">
            At $3,999 you are choosing between a monthly API habit, a DIY Mac
            project, or a turnkey agent appliance.
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
          {comparisonOptions.map((option) => (
            <div
              key={option.id}
              className={`bg-black p-8 ${
                !option.negative
                  ? "ring-1 ring-inset ring-neon-purple/40 bg-neon-purple/[0.03]"
                  : ""
              }`}
            >
              {!option.negative && (
                <p className="mb-4 text-[10px] tracking-[0.25em] text-neon-purple">
                  RECOMMENDED
                </p>
              )}
              <p className="mb-2 text-[10px] tracking-[0.25em] text-white/30">
                {option.label}
              </p>
              <p
                className={`mb-6 text-2xl font-bold ${
                  option.negative ? "text-white/50" : "text-neon-purple"
                }`}
              >
                {option.price}
              </p>
              <ul className="space-y-4">
                {option.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/70"
                  >
                    <span
                      className={`mt-2 h-1 w-1 shrink-0 ${
                        option.negative ? "bg-white/30" : "bg-neon-purple"
                      }`}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 border border-neon-purple/50 px-5 py-3 text-xs tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
          >
            SEE UMA TIERS <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
