import Link from "next/link";

import { computePower, siteConfig } from "@/lib/config";
import { HeroProductVisual } from "@/components/HeroProductVisual";
import { SubscribeForm } from "@/components/SubscribeForm";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";
import { ValidationBadge } from "@/components/ValidationBadge";

function HeroSecondaryCtas() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <TrackedPreorderLink
        location="hero"
        className="text-xs tracking-[0.2em] text-white/55 transition-colors hover:text-neon-purple"
      >
        Pre-order · {siteConfig.preOrderPrice} →
      </TrackedPreorderLink>
      <a
        href="#how-it-works"
        className="border-industrial px-6 py-3 text-xs tracking-[0.2em] text-white/60 transition-colors hover:border-neon-purple/50 hover:text-neon-purple"
      >
        SEE HOW IT WORKS
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-10 pt-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-14 lg:pt-10">
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 border border-neon-purple/30 bg-neon-purple/5 px-3 py-1 text-[10px] tracking-[0.2em] text-neon-purple">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-purple" />
              {computePower.badge}
            </div>
            <ValidationBadge compact />
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.heroHeadline}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {siteConfig.heroSubhead}
          </p>

          <div className="space-y-4 pt-1 lg:hidden">
            <SubscribeForm variant="hero" />
            <HeroSecondaryCtas />
          </div>
        </div>

        <div className="relative flex min-h-0 flex-col">
          <HeroProductVisual />

          {siteConfig.heroAccent ? (
            <p className="mt-3 text-center text-sm italic text-white/55 lg:text-right">
              <Link href="/signal" className="transition-colors hover:text-white/75">
                {siteConfig.heroAccent}
              </Link>
            </p>
          ) : null}

          <div className="mt-5 hidden w-full flex-col gap-3 lg:flex">
            <SubscribeForm variant="hero" className="[&_form]:max-w-none" />
            <HeroSecondaryCtas />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
    </section>
  );
}
