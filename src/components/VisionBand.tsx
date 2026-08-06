import Link from "next/link";

import { CafeClawVisual } from "@/components/CafeClawVisual";
import { SignalHorizonVisual } from "@/components/SignalHorizonVisual";
import { gtmConductorAccent } from "@/lib/dream-state";
import { actTwoStory, visionBand } from "@/lib/home-story";
import { symphonyRoles } from "@/lib/symphony-metaphor";

/**
 * Slim homepage vision band — symphony roles + Crew Cafe stills + Signal tease.
 */
export function VisionBand() {
  const roles = symphonyRoles.filter((r) => r.id !== "signal" && r.id !== "cafe");
  const { evolutionTease } = actTwoStory;

  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="band relative border-t border-white/10 bg-black"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* max-w-4xl keeps the headline on one line at sm:text-4xl. */}
        <div className="max-w-4xl">
          <p className="eyebrow mb-2">{visionBand.eyebrow}</p>
          <h2
            id="vision-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {visionBand.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            {visionBand.subhead}
          </p>
          <p className="mt-5 border-l-2 border-neon-purple/30 pl-4 text-xs italic leading-relaxed text-white/55">
            {gtmConductorAccent}
            <span className="mt-1 block not-italic text-white/55">
              {evolutionTease}
            </span>
          </p>
        </div>

        <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {roles.map((role) => (
            <article key={role.id} className="flex flex-col bg-black p-5 sm:p-6">
              <p className="text-[10px] tracking-[0.25em] text-neon-purple">
                {role.label}
              </p>
              <p className="mt-2 text-xs font-bold tracking-wide text-white/85">
                {role.metaphor}
              </p>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-white/55">
                {role.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-3 text-[10px] tracking-[0.25em] text-amber-200/70">
            CREW CAFE · ON METAL
          </p>
          <p className="mb-4 max-w-2xl text-xs leading-relaxed text-white/55">
            {visionBand.cafeTeaser}
          </p>
          <CafeClawVisual />
          <p className="mt-3 text-[10px] tracking-wide text-white/55">
            {visionBand.cafeDisclaimer}
          </p>
        </div>

        <div className="mt-8 grid gap-6 border border-neon-purple/20 bg-neon-purple/[0.03] p-5 sm:p-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">
              SIGNAL · CONCEPT PREVIEW
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {visionBand.signalTeaser}
            </p>
            <Link
              href="/signal"
              className="mt-5 inline-block text-xs tracking-[0.2em] text-neon-purple transition-colors hover:text-white/80"
            >
              SEE SIGNAL →
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
