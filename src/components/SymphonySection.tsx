import Link from "next/link";

import { gtmConductorAccent } from "@/lib/dream-state";
import { symphonyRoles, symphonySection } from "@/lib/symphony-metaphor";

export function SymphonySection() {
  const { eyebrow, headline, subhead, payoff, bridgeLine } = symphonySection;

  return (
    <section
      id="symphony"
      aria-labelledby="symphony-heading"
      className="relative border-t border-white/10 bg-black py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">{eyebrow}</p>
          <h2
            id="symphony-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {headline}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50">{subhead}</p>
          <p className="mt-6 text-base font-medium italic text-neon-purple/90">{payoff}</p>
          <p className="mt-3 text-xs tracking-wide text-white/40">{bridgeLine}</p>
          <p className="mt-2 text-xs italic text-white/35">{gtmConductorAccent}</p>
        </div>

        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {symphonyRoles.map((role) => (
            <article key={role.id} className="flex flex-col bg-black p-5 sm:p-6">
              <p className="text-[10px] tracking-[0.25em] text-neon-purple">{role.label}</p>
              <p className="mt-2 text-xs font-bold tracking-wide text-white/85">{role.metaphor}</p>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-white/45">{role.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/signal"
            className="text-xs tracking-[0.2em] text-neon-purple transition-colors hover:text-white/80"
          >
            SIGNAL · ACOUSTIC REACH →
          </Link>
          <Link
            href="#horizon"
            className="text-xs tracking-[0.2em] text-white/40 transition-colors hover:text-neon-purple"
          >
            CLAW CAFE · THE HALL →
          </Link>
        </div>
      </div>
    </section>
  );
}
