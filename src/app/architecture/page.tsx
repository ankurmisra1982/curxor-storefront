import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { ValidationBadge } from "@/components/ValidationBadge";
import { architectureContent } from "@/lib/architecture";
import { siteConfig } from "@/lib/config";

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
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          {eyebrow}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
          {lead}
        </p>

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
          <h2 className="mb-8 text-xs font-bold tracking-[0.3em] text-neon-purple">
            DUAL-PORT ISOLATION
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

        <div id="validation" className="mt-16 scroll-mt-24">
          <ValidationBadge />
          <ul className="mt-6 space-y-2 border border-white/10 bg-black/30 p-6 text-xs leading-relaxed text-white/45">
            <li>· ROCm / UMA / mesh latency benchmarks — publish when MS-S1 MAX silicon is validated</li>
            <li>· Factory USB / cloud-init install video — ships with production hardware</li>
            <li>· Operator PDF bundle — export from CurXor OS <code className="text-white/50">docs/scripts/export-guides-pdf.sh</code></li>
          </ul>
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
          <Link href="/" className="text-neon-purple hover:underline">
            ← Back to pre-order
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
