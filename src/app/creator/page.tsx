import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CreatorWalkthroughVideo } from "@/components/CreatorWalkthroughVideo";
import { SiteShell } from "@/components/SiteShell";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";
import {
  creatorFlowShots,
  creatorGoLiveChecks,
  creatorPageMeta,
  creatorPublishBridges,
  creatorWizardSteps,
} from "@/lib/creator-page";
import { applianceVersion, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${creatorPageMeta.title} — ${siteConfig.name}`,
  description: creatorPageMeta.description,
  alternates: { canonical: "/creator" },
  openGraph: {
    title: creatorPageMeta.title,
    description: creatorPageMeta.description,
    url: `${siteConfig.siteUrl}/creator`,
    images: [{ url: `${siteConfig.siteUrl}/demo/08-creator-claw.png` }],
  },
};

export default function CreatorPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          CREATOR CLAW · CURXOR OS {applianceVersion}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Draft locally. Publish on{" "}
          <span className="text-neon-purple">eno2 only.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
          {creatorPageMeta.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <TrackedPreorderLink
            location="persona"
            className="inline-flex bg-neon-purple px-6 py-4 text-xs font-bold tracking-[0.2em] text-black"
          >
            PRE-ORDER {siteConfig.preOrderPrice}
          </TrackedPreorderLink>
          <Link
            href="/compare/clawbox"
            className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/60 hover:text-neon-purple"
          >
            VS CLAWBOX →
          </Link>
        </div>

        <section className="mt-14">
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
            WALKTHROUGH
          </p>
          <CreatorWalkthroughVideo />
        </section>

        <section className="mt-16">
          <p className="mb-6 text-[10px] tracking-[0.25em] text-neon-purple">
            5-STEP CREATION WIZARD
          </p>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {creatorWizardSteps.map((item) => (
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
              {creatorGoLiveChecks.map((item) => (
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
              src="/demo/08-creator-claw.png"
              alt="Creator Claw Go Live panel"
              width={1440}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        <section className="mt-16">
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
            PUBLISH BRIDGES ON ENO2
          </p>
          <div className="flex flex-wrap gap-2">
            {creatorPublishBridges.map((platform) => (
              <span
                key={platform}
                className="border border-white/10 px-3 py-2 text-[10px] tracking-widest text-white/50"
              >
                {platform.toUpperCase()}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/40">
            Local inference for drafts and planning. Outbound posts egress only
            through digital bridges — you add OAuth in Bridge Health.
          </p>
        </section>

        <section className="mt-16">
          <p className="mb-8 text-[10px] tracking-[0.25em] text-neon-purple">
            FLIGHT COMMAND SCREENS
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {creatorFlowShots.map((shot) => (
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

        <section className="mt-16 border border-neon-purple/30 bg-neon-purple/[0.03] p-8">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            BEGINNER · STANDARD · EXPERT
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Beginner surfaces Go Live and the Creation Wizard first. Standard
            unlocks calendar, engage inbox, and bridge health depth. Expert adds
            planner, campaigns, library, and metrics rules — same appliance,
            progressive disclosure in Settings → Appearance.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/for/creators"
              className="text-xs tracking-[0.2em] text-neon-purple hover:underline"
            >
              CREATOR PERSONA STORY →
            </Link>
            <Link
              href="/#demo"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-neon-purple"
            >
              ALL FLIGHT COMMAND DEMOS →
            </Link>
          </div>
        </section>

        <p className="mt-12">
          <Link href="/" className="text-sm text-neon-purple hover:underline">
            ← Back to pre-order
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
