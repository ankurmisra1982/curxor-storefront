import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { InfoTip } from "@/components/InfoTip";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { ValidationBadge } from "@/components/ValidationBadge";
import { architectureContent, hardwareValidation } from "@/lib/architecture";
import { gtmTierLegend } from "@/lib/claw-gtm-tiers";
import { qaMetricsLine } from "@/lib/qa-metrics";
import { siteConfig, applianceVersion } from "@/lib/config";

export const metadata: Metadata = {
  title: `Architecture — ${siteConfig.name}`,
  description:
    "Four-pillar sovereign stack: compute, engine, telemetry mesh, and Flight Command — with eno1 Command and eno2 Egress isolation.",
  alternates: { canonical: "/architecture" },
};

export default function ArchitecturePage() {
  const { eyebrow, title, lead, pillars, ports, bridges, principles } =
    architectureContent;

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          {eyebrow}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
          {lead}
        </p>

        <div className="mt-8">
          <SubscribeFirstCtas
            preorderLocation="architecture"
            secondaryHref="/pricing#compute-ladder"
            secondaryLabel="Compare tiers"
          />
        </div>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="bg-black p-8">
              <p className="mb-2 font-mono text-[10px] tracking-widest text-neon-purple">
                PILLAR {pillar.number}
              </p>
              <h2 className="text-lg font-bold tracking-wide">{pillar.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {pillar.role}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/40">
                {pillar.detail}
              </p>
              <p className="mt-6 font-mono text-[10px] tracking-widest text-white/20">
                {pillar.path}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-8 flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-neon-purple">
            DUAL-PORT ISOLATION
            <InfoTip tipId="dualPort" />
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {ports.map((port) => (
              <div key={port.id} className="border-industrial bg-black p-6">
                <h3 className="text-sm font-bold tracking-wide">{port.name}</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/50">
                  {port.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border border-neon-purple/20 bg-neon-purple/[0.03] p-8">
          <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-neon-purple">
            DIGITAL BRIDGES (ENO2 ONLY)
          </h2>
          <ul className="space-y-4">
            {bridges.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-sm text-white/70"
              >
                <span className="mt-2 h-1 w-1 shrink-0 bg-neon-purple/60" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h2 id="claw-tiers" className="mb-2 scroll-mt-24 text-xs font-bold tracking-[0.3em] text-neon-purple">
            CLAW DEPTH TIERS
          </h2>
          <p className="mb-6 max-w-2xl text-xs leading-relaxed text-white/45">
            CurXor OS {applianceVersion} — {qaMetricsLine}. Every OOTB Claw carries an
            honest depth label on the storefront and in Flight Command.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {gtmTierLegend.map((tier) => (
              <div key={tier.id} className="border-industrial bg-black p-6">
                <h3 className="text-sm font-bold tracking-wide text-neon-purple/90">
                  {tier.label}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-white/50">{tier.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="validation" className="mt-16 scroll-mt-24">
          <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-neon-purple">
            MS-S1 VALIDATION · G1
          </h2>
          <ValidationBadge />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {(
              [
                ["doneOnBox", "text-neon-purple"] as const,
                ["g1Closed", "text-neon-purple"] as const,
                ["afterG1", "text-white/40"] as const,
              ] as const
            ).map(([key, statusClass]) => {
              const block = hardwareValidation[key];
              return (
                <div key={key} className="border border-white/10 bg-black/30 p-6">
                  <p
                    className={`text-[10px] font-bold tracking-widest ${statusClass}`}
                  >
                    {block.eyebrow}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs leading-relaxed text-white/55">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-current opacity-60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            Unboxed {hardwareValidation.unboxDate}. Demo screenshots on curxor.ai are
            dev/seed Flight Command captures — honest re-capture from box IP waits for
            G3. Operator PDF exports after G2 production artifacts.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-neon-purple">
            DESIGN PRINCIPLES
          </h2>
          <ul className="space-y-3">
            {principles.map((line) => (
              <li
                key={line}
                className="text-sm leading-relaxed text-white/60"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-16 text-xs text-white/40">
          Operator documentation lives in CurXor OS under{" "}
          <code className="text-white/50">docs/guides/02-architecture.md</code>.
          {" "}
          Open-weight tier profiles (Standard · Pro 128 · Studio) evolve with the frontier — see{" "}
          <Link href="/pricing#compute-ladder" className="text-neon-purple hover:underline">
            compare tiers
          </Link>
          .
        </p>

        <p className="mt-6">
          <Link href="/" className="text-sm text-neon-purple hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
