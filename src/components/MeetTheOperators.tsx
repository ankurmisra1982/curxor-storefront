import Image from "next/image";
import Link from "next/link";

import { ShareOnX } from "@/components/ShareOnX";
import { clawOperators, operatorsSection } from "@/lib/claw-operators";

export function MeetTheOperators() {
  return (
    <section id="operators" className="relative border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            {operatorsSection.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {operatorsSection.headline}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/45">
            {operatorsSection.subhead}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {clawOperators.map((op) => (
            <article
              key={op.id}
              className="group flex flex-col border-industrial bg-black transition-colors hover:border-neon-purple/25"
            >
              <div className="relative overflow-hidden border-b border-white/10">
                <Image
                  src={op.demo}
                  alt={`${op.claw} — ${op.name}`}
                  width={1024}
                  height={640}
                  className="h-44 w-full object-cover object-top opacity-85 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center border border-neon-purple/50 bg-black/90 font-mono text-base text-neon-purple">
                  {op.glyph}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-mono text-[10px] tracking-widest text-white/35">
                  {op.name.toUpperCase()} · {op.role}
                </p>
                <p className="mt-1 text-[10px] tracking-[0.15em] text-neon-purple/80">
                  {op.claw.toUpperCase()} · {op.eyebrow}
                </p>
                <blockquote className="mt-4 flex-1 text-base font-medium leading-relaxed text-white/85">
                  &ldquo;{op.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-[10px] tracking-[0.15em] text-white/40">{op.hook}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link
                    href={op.tourHref}
                    className="border border-neon-purple/40 px-3 py-2 text-[10px] tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
                  >
                    TOUR →
                  </Link>
                  <Link
                    href={op.personaHref}
                    className="border border-white/10 px-3 py-2 text-[10px] tracking-[0.2em] text-white/50 transition-colors hover:text-white/75"
                  >
                    STORY →
                  </Link>
                  <ShareOnX text={op.shareLine} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/#subscribe"
            className="bg-neon-purple px-8 py-4 text-xs font-bold tracking-[0.2em] text-black transition-all hover:bg-neon-glow"
          >
            JOIN WAITLIST
          </Link>
          <Link
            href="/compare"
            className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/55 hover:text-neon-purple"
          >
            WHY CURXOR →
          </Link>
        </div>

        <p className="mt-8 text-center text-[10px] text-white/30">
          Composite operators — pre-launch storytelling, not paid endorsements.
        </p>
      </div>
    </section>
  );
}
