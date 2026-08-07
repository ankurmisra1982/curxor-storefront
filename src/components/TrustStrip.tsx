import Link from "next/link";

import { trustSignals } from "@/lib/marketing";

export function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      className="border-b border-white/10 bg-black/60"
    >
      <div className="band-bar mx-auto max-w-7xl px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div key={signal.label} className="min-w-0">
              <p className="text-[9px] tracking-[0.25em] text-white/55">
                {signal.label}
              </p>
              {"href" in signal && signal.href ? (
                <Link
                  href={signal.href}
                  className="mt-1 block text-xs font-bold tracking-wide text-white/85 transition-colors hover:text-neon-purple"
                >
                  {signal.value}
                </Link>
              ) : (
                <p className="mt-1 text-xs font-bold tracking-wide text-white/85">
                  {signal.value}
                </p>
              )}
              <p className="mt-1 text-[10px] leading-relaxed text-white/55">
                {signal.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
