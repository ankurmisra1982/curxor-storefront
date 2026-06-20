"use client";

import dynamic from "next/dynamic";
import { computePower, siteConfig } from "@/lib/config";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";

const HardwareScene = dynamic(
  () =>
    import("@/components/HardwareScene").then((mod) => mod.HardwareScene),
  {
    ssr: false,
    loading: () => <HardwareSceneFallback />,
  }
);

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 border border-neon-purple/30 bg-neon-purple/5 px-3 py-1 text-[10px] tracking-[0.2em] text-neon-purple">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-purple" />
            {computePower.badge}
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Mint AI Employees on{" "}
            <span className="text-neon-purple text-glow-purple">
              Bare Metal.
            </span>
          </h1>

          <p className="text-xl font-bold leading-snug text-white/90 sm:text-2xl">
            {siteConfig.viralHook}
          </p>

          <p className="max-w-xl text-sm leading-relaxed tracking-wide text-white/60 sm:text-base">
            {siteConfig.tagline}
          </p>

          <p className="max-w-lg text-xs leading-relaxed tracking-wide text-white/40">
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
              href="#forge-loop"
              className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/60 transition-colors hover:border-neon-purple/50 hover:text-neon-purple"
            >
              FORGE LOOP
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

        <div className="relative">
          <HardwareScene />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
    </section>
  );
}

function HardwareSceneFallback() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none">
      <div className="absolute -inset-4 border border-neon-purple/20" />
      <div className="relative flex min-h-[320px] flex-col items-center justify-center gap-4 border-industrial bg-black sm:min-h-[420px]">
        <p className="text-3xl font-bold text-neon-purple">126 TOPS</p>
        <p className="text-[10px] tracking-[0.3em] text-white/30">
          INITIALIZING NEXUS RENDER...
        </p>
      </div>
    </div>
  );
}
