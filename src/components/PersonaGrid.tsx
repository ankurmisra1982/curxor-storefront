import Image from "next/image";
import Link from "next/link";

import { ShareOnX } from "@/components/ShareOnX";
import { clawOperators, operatorsSection } from "@/lib/claw-operators";

export function PersonaGrid() {
  return (
    <section id="operators" className="relative scroll-mt-24 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            {operatorsSection.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {operatorsSection.headline}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/45">
            {operatorsSection.subhead}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {clawOperators.map((persona) => (
            <article
              key={persona.id}
              className="group flex flex-col border-industrial bg-black transition-colors hover:border-neon-purple/25"
            >
              <div className="relative overflow-hidden border-b border-white/10">
                <Image
                  src={persona.demo}
                  alt={`${persona.title} — ${persona.claws}`}
                  width={1024}
                  height={640}
                  className="h-44 w-full object-cover object-top opacity-85 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center border border-neon-purple/50 bg-black/90 font-mono text-base text-neon-purple">
                  {persona.glyph}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[10px] tracking-[0.15em] text-neon-purple/80">{persona.eyebrow}</p>
                <h3 className="mt-1 text-lg font-bold tracking-tight">{persona.title}</h3>
                <p className="mt-1 text-[10px] tracking-widest text-white/35">{persona.claws}</p>
                <blockquote className="mt-4 flex-1 text-base font-medium leading-relaxed text-white/85">
                  &ldquo;{persona.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-xs leading-relaxed text-white/45">{persona.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link
                    href={persona.ctaHref}
                    className="border border-neon-purple/40 px-3 py-2 text-[10px] tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
                  >
                    {persona.cta.toUpperCase()} →
                  </Link>
                  <Link
                    href={persona.tourHref}
                    className="border border-white/10 px-3 py-2 text-[10px] tracking-[0.2em] text-white/50 transition-colors hover:text-white/75"
                  >
                    TOUR →
                  </Link>
                  <ShareOnX text={persona.shareLine} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[10px] text-white/30">
          Composite operators — pre-launch storytelling, not paid endorsements.
        </p>
      </div>
    </section>
  );
}
