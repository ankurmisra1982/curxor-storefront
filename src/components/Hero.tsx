import Link from "next/link";

import { computePower, siteConfig } from "@/lib/config";

import { HeroProductVisual } from "@/components/HeroProductVisual";

import { InfoTip } from "@/components/InfoTip";

import { SubscribeForm } from "@/components/SubscribeForm";

import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";

import { ValidationBadge } from "@/components/ValidationBadge";

import type { BuyerTipId } from "@/lib/buyer-tips";



const statTipByLabel: Partial<Record<string, BuyerTipId>> = {

  "NPU INFERENCE": "tops",

  "LPDDR5X UMA": "uma",

};



function HeroSecondaryCtas() {

  return (

    <div className="flex flex-wrap items-center gap-4">

      <TrackedPreorderLink

        location="hero"

        className="text-xs tracking-[0.2em] text-white/50 transition-colors hover:text-neon-purple"

      >

        Pre-order · {siteConfig.preOrderPrice} →

      </TrackedPreorderLink>

      <a

        href="#operators"

        className="border-industrial px-6 py-3 text-xs tracking-[0.2em] text-white/60 transition-colors hover:border-neon-purple/50 hover:text-neon-purple"

      >

        MEET OPERATORS

      </a>

    </div>

  );

}



export function Hero() {

  return (

    <section className="relative min-h-[90vh] pt-20">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-8 lg:grid-cols-2 lg:items-stretch lg:pb-24 lg:pt-10">

        <div className="flex flex-col gap-8">

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

            {siteConfig.heroHeadline}

          </h1>



          <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">

            {siteConfig.heroSubhead}

          </p>



          <p className="text-xs tracking-wide text-white/35">

            {siteConfig.heroSubtext}

          </p>



          <div className="space-y-4 pt-2 lg:hidden">

            <SubscribeForm variant="hero" />

            <HeroSecondaryCtas />

          </div>



          <p className="text-sm font-medium text-neon-purple/80">{siteConfig.viralHook}</p>



          <div className="mt-auto grid grid-cols-2 gap-4 pt-2 sm:flex sm:gap-8">

            {computePower.stats.slice(0, 4).map((stat, i) => (

              <div key={stat.label} className="flex items-center gap-4 sm:contents">

                {i > 0 && <div className="hidden h-8 w-px bg-white/10 sm:block" />}

                <div>

                  <div className="text-lg font-bold text-neon-purple sm:text-xl">

                    {stat.value}

                    <span className="ml-1 text-xs text-white/40">{stat.unit}</span>

                  </div>

                  <div className="flex items-center gap-1 text-[10px] tracking-widest text-white/30">

                    {stat.label}

                    {statTipByLabel[stat.label] ? (

                      <InfoTip tipId={statTipByLabel[stat.label]!} />

                    ) : null}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>



        <div className="relative flex min-h-0 flex-col lg:pt-1">
          <HeroProductVisual />

          {siteConfig.heroAccent ? (
            <p className="mt-3 text-center text-sm italic text-white/40 sm:mt-4 lg:text-right">
              <Link href="/signal" className="transition-colors hover:text-white/55">
                {siteConfig.heroAccent}
              </Link>
            </p>
          ) : null}

          <div className="mt-auto hidden w-full flex-col gap-4 pt-5 lg:flex lg:pt-6">
            <SubscribeForm variant="hero" className="[&_form]:max-w-none" />
            <HeroSecondaryCtas />
          </div>
        </div>

      </div>



      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

    </section>

  );

}


