import Image from "next/image";
import Link from "next/link";

import { actOneStory } from "@/lib/home-story";

export function WhatYouBuySection() {
  const { eyebrow, headline, subhead, flagships, forge } = actOneStory;

  return (
    <section id="what-you-buy" className="relative border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">{eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/50">{subhead}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {flagships.map((item) => (
            <article
              key={item.claw}
              className="group flex flex-col border-industrial bg-black transition-colors hover:border-neon-purple/30"
            >
              <div className="overflow-hidden border-b border-white/10">
                <Image
                  src={item.demo}
                  alt={item.claw}
                  width={1024}
                  height={640}
                  className="h-36 w-full object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] tracking-[0.2em] text-neon-purple">{item.tier.toUpperCase()}</p>
                <h3 className="mt-1 text-lg font-bold tracking-wide">{item.claw}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-white/50">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex w-fit border border-neon-purple/40 px-3 py-2 text-[10px] tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
                >
                  TOUR →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-5 grid overflow-hidden border border-white/10 bg-black md:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden border-b border-white/10 md:border-b-0 md:border-r">
            <Image
              src={forge.demo}
              alt={forge.claw}
              width={1024}
              height={640}
              className="h-full min-h-[200px] w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-[10px] tracking-[0.2em] text-white/70">{forge.tier.toUpperCase()}</p>
            <h3 className="mt-1 text-xl font-bold tracking-wide">{forge.claw}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{forge.body}</p>
            <Link
              href={forge.href}
              className="mt-5 inline-flex w-fit text-xs tracking-[0.2em] text-neon-purple hover:underline"
            >
              DEPTH TIERS →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
