import Link from "next/link";

import { missionVision } from "@/lib/mission-vision";

type Variant = "home" | "about";

/**
 * Mission, Vision & Purpose — About / below pricing. Never the main hero H1.
 * Purpose horizon + pillars = dream-state / after-fundraise personal algorithm pattern.
 */
export function MissionVisionSection({
  variant = "home",
}: {
  variant?: Variant;
}) {
  const {
    eyebrow,
    mission,
    vision,
    purpose,
    purposeHorizon,
    purposePillars,
    buyToday,
  } = missionVision;
  const headingId =
    variant === "about" ? "about-mission-heading" : "mission-vision-heading";

  return (
    <section
      id={variant === "about" ? "mission" : "mission-vision"}
      aria-labelledby={headingId}
      className="relative border-t border-white/10 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            {eyebrow}
          </p>
          {variant === "about" ? (
            <h1
              id={headingId}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Mission, Vision &amp; Purpose
            </h1>
          ) : (
            <h2
              id={headingId}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Mission, Vision &amp; Purpose
            </h2>
          )}
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">
              {mission.label.toUpperCase()}
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-lg">
              {mission.body}
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">
              {vision.label.toUpperCase()}
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-lg">
              {vision.body}
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            {purpose.label.toUpperCase()}
          </p>
          <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-lg">
            {purpose.body}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            {purpose.gloss}
          </p>
        </div>

        <div className="mt-10 w-full rounded-sm border border-white/10 bg-white/[0.02] px-5 py-6 sm:px-6 sm:py-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            {purposeHorizon.label.toUpperCase()}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/55 sm:text-base">
            {purposeHorizon.body}
          </p>

          <ul className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6">
            {purposePillars.map((pillar) => (
              <li key={pillar.title}>
                <p className="text-sm font-medium tracking-tight text-white/80">
                  {pillar.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/45">
                  {pillar.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-7 border-t border-white/5 pt-5 text-[11px] tracking-[0.12em] text-white/35">
            {purposeHorizon.honesty}
          </p>
        </div>

        <div className="mt-10 max-w-3xl border-t border-white/10 pt-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            {buyToday.label.toUpperCase()}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            {buyToday.body}
          </p>
          {variant === "home" ? (
            <Link
              href="/about"
              className="mt-5 inline-block text-xs tracking-[0.2em] text-neon-purple transition-colors hover:text-white/80"
            >
              ABOUT CURXOR →
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
