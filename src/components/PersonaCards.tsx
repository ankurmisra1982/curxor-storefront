import Image from "next/image";
import Link from "next/link";

import { personaCards } from "@/lib/marketing";

export function PersonaCards() {
  return (
    <section id="personas" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              WHO IT&apos;S FOR
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pick Your Stack
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-white/40">
            Same appliance — different Claws. Enable any combination in Settings
            on day one.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {personaCards.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col border-industrial bg-black"
            >
              <div className="overflow-hidden border-b border-white/10">
                <Image
                  src={card.demo}
                  alt={card.claw}
                  width={1024}
                  height={640}
                  className="h-auto w-full opacity-90 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] tracking-[0.25em] text-neon-purple">
                  {card.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-1 text-[10px] tracking-widest text-white/35">
                  {card.claw}
                </p>
                <p className="mt-4 flex-1 text-xs leading-relaxed text-white/50">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex text-xs tracking-[0.2em] text-neon-purple transition-colors hover:text-neon-glow"
                >
                  LEARN MORE →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
