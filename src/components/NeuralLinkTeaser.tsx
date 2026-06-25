import Link from "next/link";

import { SignalHorizonVisual } from "@/components/SignalHorizonVisual";
import { signalHorizonCopy, signalHubName } from "@/lib/signal-page";

export function NeuralLinkTeaser() {
  return (
    <section
      id="neural-link"
      aria-labelledby="neural-link-heading"
      className="relative scroll-mt-24 border-y border-neon-purple/20 bg-gradient-to-b from-neon-purple/[0.07] via-black to-black py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-industrial opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              SIGNAL CLAW · {signalHubName.toUpperCase()} · PREVIEW
            </p>
            <h2
              id="neural-link-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
            >
              {signalHorizonCopy.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {signalHorizonCopy.subhead}
            </p>
            <p className="mt-3 text-xs italic text-white/35">
              Humanoid preview on appliance today — glance, VR, and fleet classes on the roadmap.
            </p>

            <Link
              href="/signal"
              className="group mt-8 inline-flex flex-col border border-neon-purple/50 bg-black/80 px-6 py-5 transition-colors hover:border-neon-purple hover:bg-neon-purple/[0.08]"
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

          <div className="min-w-0">
            <SignalHorizonVisual compact />
          </div>
        </div>
      </div>
    </section>
  );
}
