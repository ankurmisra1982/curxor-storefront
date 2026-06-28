import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ClawDemoHero } from "@/components/ClawDemoHero";
import { OperatorQuote } from "@/components/OperatorQuote";
import { ShareOnX } from "@/components/ShareOnX";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { getOperator } from "@/lib/claw-operators";
import { applianceVersion, siteConfig } from "@/lib/config";
import {
  outreachDemoHero,
  outreachDemoTourSteps,
  outreachFlowShots,
  outreachGoLiveChecks,
  outreachPageMeta,
  outreachTierBFeatures,
} from "@/lib/outreach-page";

export const metadata: Metadata = {
  title: `${outreachPageMeta.title} — ${siteConfig.name}`,
  description: outreachPageMeta.description,
  alternates: { canonical: "/outreach" },
  openGraph: {
    title: outreachPageMeta.title,
    description: outreachPageMeta.description,
    url: `${siteConfig.siteUrl}/outreach`,
    images: [{ url: `${siteConfig.siteUrl}/demo/outreach/21-pipeline.png` }],
  },
};

export default function OutreachPage() {
  const cleo = getOperator("cleo");

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          OUTREACH CLAW · CURXOR OS {applianceVersion}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {outreachPageMeta.hero}{" "}
          <span className="text-neon-purple">{outreachPageMeta.accent}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
          {outreachPageMeta.oneLiner}
        </p>

        <div className="mt-8 space-y-4">
          <SubscribeFirstCtas
            preorderLocation="persona"
            secondaryHref="/compare/miky"
            secondaryLabel="vs MIKY"
          />
          {cleo ? <ShareOnX text={cleo.shareLine} label="CLEO ON X" /> : null}
        </div>

        {cleo ? (
          <section className="mt-10">
            <OperatorQuote operator={cleo} />
          </section>
        ) : null}

        <section className="mt-14">
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
            FLIGHT COMMAND
          </p>
          <ClawDemoHero {...outreachDemoHero} />
        </section>

        <section className="mt-16">
          <p className="mb-6 text-[10px] tracking-[0.25em] text-neon-purple">
            DEMO TOUR PATH
          </p>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {outreachDemoTourSteps.map((item) => (
              <article key={item.step} className="bg-black p-6">
                <p className="text-[10px] tracking-[0.3em] text-neon-purple">
                  STEP {item.step}
                </p>
                <h2 className="mt-3 text-sm font-bold">{item.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-white/50">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="border-industrial p-8">
            <p className="text-[10px] tracking-[0.25em] text-neon-purple">
              GO LIVE CHECKLIST
            </p>
            <ul className="mt-6 space-y-4">
              {outreachGoLiveChecks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-xs leading-relaxed text-white/55"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-neon-purple" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden border border-white/10">
            <Image
              src="/demo/outreach/20-go-live.png"
              alt="Outreach Claw Go Live panel with demo tour"
              width={1440}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        <section className="mt-16">
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
            TIER B · SHIPPED ON APPLIANCE
          </p>
          <div className="flex flex-wrap gap-2">
            {outreachTierBFeatures.map((feature) => (
              <span
                key={feature}
                className="border border-white/10 px-3 py-2 text-[10px] tracking-widest text-white/50"
              >
                {feature.toUpperCase()}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/40">
            Sequences draft locally. Mail egresses only through SMTP on eno2.
          </p>
        </section>

        <section className="mt-16">
          <p className="mb-8 text-[10px] tracking-[0.25em] text-neon-purple">
            FLIGHT COMMAND SCREENS
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {outreachFlowShots.map((shot) => (
              <article key={shot.src} className="border-industrial bg-black p-4">
                <div className="overflow-hidden border border-white/10">
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    width={1024}
                    height={640}
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="mt-4 text-sm font-bold text-white/90">
                  {shot.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/50">
                  {shot.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border border-neon-purple/30 bg-neon-purple/[0.03] p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            BEGINNER · STANDARD · EXPERT
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Demo tour first — simulated sends without SMTP. Unlock sequences,
            analytics, and reply intent as you graduate.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/for/agencies"
              className="text-xs tracking-[0.2em] text-neon-purple hover:underline"
            >
              MEET CLEO →
            </Link>
            <Link
              href="/#operators"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-neon-purple"
            >
              ALL OPERATORS →
            </Link>
          </div>
        </section>

        <p className="mt-12">
          <Link href="/" className="text-sm text-neon-purple hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
