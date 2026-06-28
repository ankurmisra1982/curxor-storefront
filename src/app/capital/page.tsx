import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ClawDemoHero } from "@/components/ClawDemoHero";
import { OperatorQuote } from "@/components/OperatorQuote";
import { ShareOnX } from "@/components/ShareOnX";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { getOperator } from "@/lib/claw-operators";
import {
  capitalDemoHero,
  capitalEgressPaths,
  capitalFlowShots,
  capitalGoLiveChecks,
  capitalPageMeta,
  capitalSetupSteps,
} from "@/lib/capital-page";
import { applianceVersion, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${capitalPageMeta.title} — ${siteConfig.name}`,
  description: capitalPageMeta.description,
  alternates: { canonical: "/capital" },
  openGraph: {
    title: capitalPageMeta.title,
    description: capitalPageMeta.description,
    url: `${siteConfig.siteUrl}/capital`,
    images: [{ url: `${siteConfig.siteUrl}/demo/03-capital-claw.png` }],
  },
};

export default function CapitalPage() {
  const alpha = getOperator("alpha");

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          CAPITAL CLAW · CURXOR OS {applianceVersion}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {capitalPageMeta.hero}{" "}
          <span className="text-neon-purple">{capitalPageMeta.accent}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
          {capitalPageMeta.oneLiner}
        </p>

        <div className="mt-8 space-y-4">
          <SubscribeFirstCtas
            preorderLocation="persona"
            secondaryHref="/compare/mac-studio-ollama"
            secondaryLabel="vs Mac Studio + Ollama"
          />
          {alpha ? <ShareOnX text={alpha.shareLine} label="ALPHA ON X" /> : null}
        </div>

        {alpha ? (
          <section className="mt-10">
            <OperatorQuote operator={alpha} />
          </section>
        ) : null}

        <section className="mt-14">
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
            FLIGHT COMMAND
          </p>
          <ClawDemoHero {...capitalDemoHero} />
        </section>

        <section className="mt-16">
          <p className="mb-6 text-[10px] tracking-[0.25em] text-neon-purple">
            SETUP WIZARD PATH
          </p>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {capitalSetupSteps.map((item) => (
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
              {capitalGoLiveChecks.map((item) => (
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
              src="/demo/capital/19-capital-go-live.png"
              alt="Capital Claw Go Live panel"
              width={1440}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        <section className="mt-16">
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
            EGRESS PATHS ON ENO2
          </p>
          <div className="flex flex-wrap gap-2">
            {capitalEgressPaths.map((path) => (
              <span
                key={path}
                className="border border-white/10 px-3 py-2 text-[10px] tracking-widest text-white/50"
              >
                {path.toUpperCase()}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/40">
            Local inference for rules and research. Outbound trades egress only
            through digital bridges on eno2.
          </p>
        </section>

        <section className="mt-16">
          <p className="mb-8 text-[10px] tracking-[0.25em] text-neon-purple">
            FLIGHT COMMAND SCREENS
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {capitalFlowShots.map((shot) => (
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
            Go Live and demo tour first. Unlock analytics, backtest, and MCP
            pilots as you graduate — same appliance, progressive disclosure.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/for/traders"
              className="text-xs tracking-[0.2em] text-neon-purple hover:underline"
            >
              MEET ALPHA →
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
