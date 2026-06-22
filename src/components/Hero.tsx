"use client";

import { computePower, siteConfig } from "@/lib/config";
import { HeroProductVisual } from "@/components/HeroProductVisual";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";
import { ValidationBadge } from "@/components/ValidationBadge";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 border border-neon-purple/30 bg-neon-purple/5 px-3 py-1 text-[10px] tracking-[0.2em] text-neon-purple">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-purple" />
              {computePower.badge}
            </div>
            <ValidationBadge compact />
            <div className="inline-flex items-center border border-white/15 bg-white/[0.02] px-3 py-1 text-[9px] tracking-[0.15em] text-white/50">
              {siteConfig.heroCreatorBadge}
            </div>
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.viralHook}
          </h1>

          <p className="text-2xl font-bold leading-snug text-white/90 sm:text-3xl">
            Mint AI employees on{" "}
            <span className="text-neon-purple text-glow-purple">bare metal.</span>
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            {siteConfig.tagline}
          </p>
          <p className="text-xs tracking-wide text-white/35">
            {siteConfig.heroSubtext}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <TrackedPreorderLink
              location="hero"
              className="group relative inline-flex items-center gap-3 bg-neon-purple px-8 py-4 text-sm font-bold tracking-[0.2em] text-black transition-all hover:bg-neon-glow animate-pulse-glow"
            >
              <span>PRE-ORDER {siteConfig.preOrderPrice}</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </TrackedPreorderLink>
            <a
              href="#operators"
              className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/60 transition-colors hover:border-neon-purple/50 hover:text-neon-purple"
            >
              MEET OPERATORS
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 sm:flex sm:gap-8">
            {computePower.stats.slice(0, 4).map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4 sm:contents">
                {i > 0 && <div className="hidden h-8 w-px bg-white/10 sm:block" />}
                <div>
                  <div className="text-lg font-bold text-neon-purple sm:text-xl">
                    {stat.value}
                    <span className="ml-1 text-xs text-white/40">{stat.unit}</span>
                  </div>
                  <div className="text-[10px] tracking-widest text-white/30">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <HeroProductVisual />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
    </section>
  );
}
