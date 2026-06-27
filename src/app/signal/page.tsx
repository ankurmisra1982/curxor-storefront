import type { Metadata } from "next";
import Link from "next/link";

import { SignalHorizonVisual } from "@/components/SignalHorizonVisual";
import { SignalOptimusPreview } from "@/components/SignalOptimusPreview";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import {
  signalDeviceClasses,
  signalHonesty,
  signalHorizonCopy,
  signalHubName,
  signalPageHero,
  signalPageMeta,
  signalTodayTabs,
} from "@/lib/signal-page";
import { applianceVersion, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${signalPageMeta.title} — ${siteConfig.name}`,
  description: signalPageMeta.description,
  alternates: { canonical: "/signal" },
  openGraph: {
    title: signalPageMeta.title,
    description: signalPageMeta.description,
    url: `${siteConfig.siteUrl}/signal`,
  },
};

export default function SignalPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <section>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
                SIGNAL CLAW · {signalHubName.toUpperCase()} · PREVIEW · CURXOR OS {applianceVersion}
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {signalPageHero.hero}{" "}
                <span className="text-neon-purple">{signalPageHero.accent}</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/50">{signalPageHero.oneLiner}</p>
              <p className="mt-6 text-base font-medium text-white/80">{signalHorizonCopy.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/45">{signalHorizonCopy.subhead}</p>
            </div>

            <div className="min-w-0">
              <SignalHorizonVisual compact showVoidQuestion={false} />
            </div>
          </div>

          <div className="mt-10">
            <SubscribeFirstCtas
              preorderLocation="persona"
              secondaryHref="/architecture#dual-port"
              secondaryLabel="Dual-port architecture"
            />
          </div>
        </section>

        <section className="mt-16">
          <p className="mb-6 text-[10px] tracking-[0.25em] text-neon-purple">
            DEVICE-CLASS REGISTRY · HORIZON
          </p>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {signalDeviceClasses.map((item) => (
              <article key={item.label} className="bg-black p-6">
                <p className="text-[10px] tracking-[0.3em] text-neon-purple">{item.label}</p>
                <p className="mt-2 text-sm font-bold text-white/85">{item.examples}</p>
                <p className="mt-2 text-[10px] tracking-widest text-white/35">{item.wave}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/40">
            One Claw registers every AI-capable device — not a new Claw per gadget. Digital desks
            think; Signal Claw connects the worn and embodied world to the same CCP, Kin, and Cafe.
          </p>
        </section>

        <section className="mt-16">
          <p className="mb-6 text-[10px] tracking-[0.25em] text-white/35">
            SHIPPED TODAY · HUMANOID HOME HUB
          </p>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {signalTodayTabs.map((item) => (
              <article key={item.tab} className="bg-black p-5">
                <p className="text-[10px] tracking-[0.3em] text-neon-purple">{item.tab}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden border border-white/10 bg-black">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="text-[10px] tracking-[0.25em] text-white/50">
              FLIGHT COMMAND · /optimus
            </span>
            <span className="border border-amber-400/30 px-2 py-0.5 text-[9px] tracking-widest text-amber-200/70">
              TIER C PREVIEW
            </span>
          </div>
          <SignalOptimusPreview />
          <p className="px-4 py-3 text-xs leading-relaxed text-white/45">
            Pair wizard and mesh preview on appliance — live humanoid motion hardware-gated.
          </p>
        </section>

        <section className="mt-16 border border-neon-purple/30 bg-neon-purple/[0.03] p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">HONEST PREVIEW</p>
          <ul className="mt-4 space-y-3">
            {signalHonesty.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-xs leading-relaxed text-white/55"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 bg-neon-purple" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/architecture"
              className="text-xs tracking-[0.2em] text-neon-purple hover:underline"
            >
              FULL STACK →
            </Link>
            <Link
              href="/#apps"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-neon-purple"
            >
              ALL CLAWS →
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
