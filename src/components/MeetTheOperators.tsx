import Image from "next/image";
import Link from "next/link";

import { clawOperators, operatorsSection } from "@/lib/claw-operators";

export function MeetTheOperators() {
  return (
    <section id="operators" className="relative border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            {operatorsSection.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {operatorsSection.headline}
          </h2>
          <p className="mt-2 text-sm text-white/45">{operatorsSection.subhead}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
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
                  className="h-36 w-full object-cover object-top opacity-85 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center border border-neon-purple/50 bg-black/90 font-mono text-base text-neon-purple">
                  {op.glyph}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[10px] tracking-widest text-white/35">
                  {op.name.toUpperCase()} · {op.role}
                </p>
                <blockquote className="mt-3 flex-1 text-sm font-medium leading-relaxed text-white/80">
                  &ldquo;{op.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-[10px] tracking-[0.15em] text-neon-purple/80">
                  {op.hook}
                </p>
                <div className="mt-5 flex gap-3">
                  <Link
                    href={op.tourHref}
                    className="border border-neon-purple/40 px-3 py-2 text-[10px] tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
                  >
                    TOUR →
                  </Link>
                  <Link
                    href={op.personaHref}
                    className="py-2 text-[10px] tracking-[0.2em] text-white/35 transition-colors hover:text-white/60"
                  >
                    STORY →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-[10px] text-white/30">
          Composite operators — pre-launch storytelling, not paid endorsements.
        </p>
      </div>
    </section>
  );
}
