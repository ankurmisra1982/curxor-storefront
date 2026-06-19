"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

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
          <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 text-[10px] tracking-[0.25em] text-white/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-purple" />
            SOVEREIGN EDGE HARDWARE
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Vibe-Code the{" "}
            <span className="text-neon-purple text-glow-purple">
              Physical World.
            </span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed tracking-wide text-white/70 sm:text-lg">
            {siteConfig.tagline}
          </p>

          <p className="max-w-lg text-xs leading-relaxed tracking-wide text-white/40">
            Control Optimus, clawbots, and autonomous fleets locally — zero cloud
            latency, full data sovereignty.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={siteConfig.stripeCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-neon-purple px-8 py-4 text-sm font-bold tracking-[0.2em] text-black transition-all hover:bg-neon-glow animate-pulse-glow"
            >
              <span>PRE-ORDER NOW</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="#specs"
              className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              VIEW SPECS
            </a>
          </div>

          <div className="flex gap-8 pt-4 text-[10px] tracking-widest text-white/30">
            <div>
              <div className="text-neon-purple">126</div>
              <div>TOPS NPU</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-neon-purple">&lt;1ms</div>
              <div>TELEMETRY</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-neon-purple">0</div>
              <div>CLOUD DEPS</div>
            </div>
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
      <div className="relative flex min-h-[320px] items-center justify-center border-industrial bg-black sm:min-h-[420px]">
        <p className="text-[10px] tracking-[0.3em] text-white/30">
          INITIALIZING NEXUS RENDER...
        </p>
      </div>
    </div>
  );
}
