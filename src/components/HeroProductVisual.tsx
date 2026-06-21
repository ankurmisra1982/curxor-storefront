import Image from "next/image";
import Link from "next/link";

const CLAW_CHIPS = [
  { icon: "↗", label: "Capital" },
  { icon: "♡", label: "Vital" },
  { icon: "⚘", label: "Kin" },
] as const;

export function HeroProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="absolute -inset-3 border border-neon-purple/25 bg-neon-purple/[0.02]" />
      <div className="absolute -inset-6 border border-white/5" />

      <div className="relative border-industrial bg-black">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neon-purple shadow-[0_0_8px_#BF5AF2]" />
            <span className="text-[10px] tracking-[0.25em] text-white/50">
              FLIGHT COMMAND
            </span>
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="border border-white/10 px-2 py-0.5 text-[9px] tracking-widest text-white/40">
              eno1 · COMMAND
            </span>
            <span className="border border-neon-purple/30 px-2 py-0.5 text-[9px] tracking-widest text-neon-purple/80">
              eno2 · EGRESS
            </span>
          </div>
        </div>

        <Link href="#demo" className="group block">
          <div className="relative overflow-hidden">
            <Image
              src="/demo/01-home.png"
              alt="CurXor Flight Command Home hub with grouped Claw workspaces"
              width={1024}
              height={640}
              priority
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] text-white/50 transition-colors group-hover:text-neon-purple">
              REAL APPLIANCE UI · TAP TO SEE MORE
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
          <div className="flex flex-wrap gap-2">
            {CLAW_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 border border-white/10 px-2 py-1 text-[10px] tracking-wide text-white/50"
              >
                <span className="text-neon-purple">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>
          <p className="text-[10px] tracking-widest text-white/25">
            126 TOPS · 64GB UMA
          </p>
        </div>
      </div>
    </div>
  );
}
