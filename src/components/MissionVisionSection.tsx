import Link from "next/link";

import { missionVision } from "@/lib/mission-vision";

type Variant = "home" | "about";

/**
 * Mission & Vision — About / below pricing. Never the main hero H1.
 */
export function MissionVisionSection({
  variant = "home",
}: {
  variant?: Variant;
}) {
  const { eyebrow, mission, vision, buyToday } = missionVision;
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
              Mission &amp; Vision
            </h1>
          ) : (
            <h2
              id={headingId}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Mission &amp; Vision
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
