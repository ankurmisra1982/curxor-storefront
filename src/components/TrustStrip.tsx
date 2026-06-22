import Link from "next/link";

import { socialProofLine, trustSignals } from "@/lib/marketing";

export function TrustStrip() {
  return (
    <section
      aria-label="Pre-order trust signals"
      className="border-b border-white/10 bg-black/60"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div key={signal.label} className="min-w-0">
              <p className="text-[9px] tracking-[0.25em] text-white/35">
                {signal.label}
              </p>
              {"href" in signal && signal.href ? (
                <Link
                  href={signal.href}
                  className="mt-1 block text-xs font-bold tracking-wide text-white/80 transition-colors hover:text-neon-purple"
                >
                  {signal.value}
                </Link>
              ) : (
                <p className="mt-1 text-xs font-bold tracking-wide text-white/80">
                  {signal.value}
                </p>
              )}
              <p className="mt-1 text-[10px] leading-relaxed text-white/40">
                {signal.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 border-t border-white/10 pt-3 text-center text-[10px] text-white/30">
          {socialProofLine}
        </p>
      </div>
    </section>
  );
}
