import Link from "next/link";
import { siteConfig } from "@/lib/config";

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
          <HardwareRenderPlaceholder />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
    </section>
  );
}

function HardwareRenderPlaceholder() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none">
      <div className="absolute -inset-4 border border-neon-purple/20" />
      <div className="absolute -inset-8 border border-white/5" />

      <div className="relative flex h-full flex-col border-industrial bg-black">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[10px] tracking-widest text-white/40">
          <span>RENDER // CURXOR-NEXUS-V1</span>
          <span className="text-neon-purple">● LIVE</span>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-hidden">
          <div className="absolute inset-0 grid-industrial opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-neon-purple/10" />

          <div className="relative z-10 flex flex-col items-center gap-6 p-8">
            <div className="relative">
              <div className="h-48 w-64 border-2 border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] sm:h-56 sm:w-72">
                <div className="absolute inset-x-4 top-4 h-1 bg-neon-purple/60" />
                <div className="absolute inset-x-8 top-8 flex gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-1 bg-white/10"
                      style={{ height: `${20 + (i % 3) * 12}px` }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
                  <div className="h-3 w-3 rounded-full bg-neon-purple shadow-[0_0_12px_#BF5AF2]" />
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 h-full w-full border border-neon-purple/30 -z-10" />
            </div>

            <p className="text-center text-[10px] tracking-[0.3em] text-white/30">
              [ 3D HARDWARE RENDER PLACEHOLDER ]
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
            <div className="h-px w-full bg-neon-purple/50 animate-scan-line" />
          </div>
        </div>

        <div className="flex justify-between border-t border-white/10 px-4 py-2 text-[10px] tracking-widest text-white/30">
          <span>ROT: 0.0°</span>
          <span>ZOOM: 1.0×</span>
          <span>MESH: NEXUS-01</span>
        </div>
      </div>
    </div>
  );
}
