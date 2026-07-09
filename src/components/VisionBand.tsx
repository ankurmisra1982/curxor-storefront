import Link from "next/link";

import { CafeClawVisual } from "@/components/CafeClawVisual";
import { SignalHorizonVisual } from "@/components/SignalHorizonVisual";
import { gtmConductorAccent } from "@/lib/dream-state";
import { actTwoStory, visionBand } from "@/lib/home-story";
import { symphonyRoles } from "@/lib/symphony-metaphor";

/**
 * Collapsed homepage vision band — Symphony roles + Signal tease + Cafe proof
 * in one section (pre-marketing diet vs three competing metaphor acts).
 */
export function VisionBand() {
  const roles = symphonyRoles.filter((r) => r.id !== "signal" && r.id !== "cafe");
  const { cafeProof, evolutionTease } = actTwoStory;

  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="relative border-t border-white/10 bg-black py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            {visionBand.eyebrow}
          </p>
          <h2
            id="vision-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {visionBand.headline}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            {visionBand.subhead}
          </p>
          <p className="mt-3 text-xs italic text-white/35">{gtmConductorAccent}</p>
          <p className="mt-2 text-xs italic text-white/30">{evolutionTease}</p>
        </div>

        <div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {roles.map((role) => (
            <article key={role.id} className="flex flex-col bg-black p-5 sm:p-6">
              <p className="text-[10px] tracking-[0.25em] text-neon-purple">
                {role.label}
              </p>
              <p className="mt-2 text-xs font-bold tracking-wide text-white/85">
                {role.metaphor}
              </p>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-white/45">
                {role.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border border-neon-purple/20 bg-neon-purple/[0.03] p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">
              SIGNAL · CONCEPT PREVIEW
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {visionBand.signalTeaser}
            </p>
            <Link
              href="/signal"
              className="mt-5 inline-block text-xs tracking-[0.2em] text-neon-purple transition-colors hover:text-white/80"
            >
              SEE SIGNAL CLAW →
            </Link>
          </div>
          <div className="min-w-0">
            <SignalHorizonVisual compact />
          </div>
        </div>

        <div className="mt-8 border border-amber-400/25 bg-black/40 p-6 sm:p-8">
          <p className="text-[10px] font-bold tracking-[0.25em] text-amber-200/90">
            {visionBand.cafeDisclaimer}
          </p>
          <p className="mt-4 text-[10px] tracking-[0.25em] text-amber-200/60">
            CAFE TIER · PROOF
          </p>
          <blockquote className="mt-3 max-w-xl border-l-2 border-amber-400/30 pl-4">
            <p className="text-sm italic leading-relaxed tracking-wide text-amber-200/80 sm:text-[15px]">
              {cafeProof.kicker}
            </p>
          </blockquote>
          <h3 className="mt-5 text-lg font-bold tracking-wide text-white/90">
            {cafeProof.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/50">
            {cafeProof.body}
          </p>
          <p className="mt-3 text-xs text-white/40">{visionBand.cafeTeaser}</p>
          <div className="mt-8">
            <CafeClawVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
