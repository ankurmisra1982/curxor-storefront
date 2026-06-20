import { computePower, siteConfig } from "@/lib/config";

export function ComputePower() {
  return (
    <section id="compute" className="relative border-y border-neon-purple/20 bg-neon-purple/[0.04] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.35em] text-neon-purple">
              {computePower.badge}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {computePower.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              {computePower.subhead}
            </p>
          </div>
          <p className="max-w-sm border-l-2 border-neon-purple/50 pl-4 text-lg font-bold leading-snug text-white/90">
            {siteConfig.computeHook}
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
          {computePower.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-black px-6 py-8 text-center sm:px-8 sm:py-10"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-neon-purple text-glow-purple sm:text-5xl md:text-6xl">
                  {stat.value}
                </span>
                <span className="text-lg tracking-widest text-white/50 sm:text-xl">
                  {stat.unit}
                </span>
              </div>
              <p className="mt-3 text-[10px] tracking-[0.25em] text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {computePower.comparison.map((row) => (
            <div key={row.cloud} className="bg-black p-6 sm:p-8">
              <p className="mb-3 text-[10px] tracking-[0.25em] text-white/30">
                CLOUD STACK
              </p>
              <p className="mb-6 text-sm text-white/40 line-through decoration-white/20">
                {row.cloud}
              </p>
              <p className="mb-2 text-[10px] tracking-[0.25em] text-neon-purple">
                CURXOR NEXUS
              </p>
              <p className="text-sm font-bold text-white/90">{row.curxor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
