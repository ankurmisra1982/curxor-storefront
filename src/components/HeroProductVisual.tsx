import Image from "next/image";
import Link from "next/link";

import { productStills } from "@/lib/product-stills";

const CLAW_CHIPS = [
  { icon: "↗", label: "Capital" },
  { icon: "♡", label: "Vital" },
  { icon: "⚘", label: "Kin" },
] as const;

export function HeroProductVisual() {
  const still = productStills.a;

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(191,90,242,0.1),transparent_70%)]" />
        <div className="absolute inset-0 grid-industrial opacity-25" />
      </div>

      <div className="absolute -inset-3 border border-neon-purple/25 bg-neon-purple/[0.02]" />
      <div className="absolute -inset-6 border border-white/5" />

      <div className="relative border-industrial bg-black">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neon-purple shadow-[0_0_8px_#BF5AF2]" />
            <span className="text-[10px] tracking-[0.25em] text-white/50">
              CURXOR · MS-S1 CLASS
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
              src={still.src}
              alt={still.alt}
              width={still.width}
              height={still.height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
              priority
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-[10px] tracking-[0.18em] text-white/55 transition-colors group-hover:text-neon-purple">
              PRODUCT STILL · MS-S1 CLASS · TAP FOR DESK PROOF
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
        <p className="border-t border-white/10 px-4 py-2.5 text-[10px] leading-relaxed tracking-wide text-white/35">
          {productStills.honesty}
        </p>
      </div>
    </div>
  );
}
