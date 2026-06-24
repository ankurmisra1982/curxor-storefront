import Link from "next/link";

import { signalHorizonCopy, signalHubName } from "@/lib/signal-page";

export function NeuralLinkTeaser() {
  return (
    <section
      id="neural-link"
      className="relative border-t border-white/10 bg-gradient-to-b from-neon-purple/[0.04] to-transparent py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              SIGNAL CLAW · {signalHubName.toUpperCase()} · PREVIEW
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              {signalHorizonCopy.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {signalHorizonCopy.subhead}
            </p>
            <p className="mt-3 text-xs italic text-white/30">
              Humanoid preview on appliance today — glance, VR, and fleet classes on the roadmap.
            </p>
          </div>

          <Link
            href="/signal"
            className="group inline-flex shrink-0 flex-col border border-neon-purple/40 bg-black px-6 py-5 transition-colors hover:border-neon-purple hover:bg-neon-purple/[0.06]"
          >
            <span className="text-[10px] tracking-[0.25em] text-neon-purple">
              WHAT IS THE NEXT INTERFACE?
            </span>
            <span className="mt-2 text-sm font-bold tracking-wide text-white/90 transition-colors group-hover:text-neon-purple">
              See Signal Claw →
            </span>
            <span className="mt-1 text-[10px] tracking-widest text-white/35">
              CONCEPT PREVIEW · NOT DAY-ONE INTEGRATION
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
