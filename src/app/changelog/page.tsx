import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { changelogEntries, changelogMeta } from "@/lib/changelog";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Changelog — ${siteConfig.name}`,
  description: "CurXor OS and storefront release notes tied to appliance version.",
  alternates: { canonical: "/changelog" },
};

export default function ChangelogPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
          RELEASES
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Changelog
        </h1>
        <p className="mt-4 text-sm text-white/50">
          Synced from CurXor OS{" "}
          <span className="text-white/70">v{changelogMeta.version}</span> (
          {changelogMeta.channel}). Last appliance sync:{" "}
          {new Date(changelogMeta.syncedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          . MS-S1 MAX unboxed 2026-06-28 — G1 golden path closed Jun 29 (verify
          script + smile test PASS; COMMAND captive portal + EGRESS mesh live on box).
        </p>

        <div className="mt-12 space-y-12">
          {changelogEntries.map((entry) => (
            <article
              key={entry.version}
              className="border-t border-white/10 pt-10"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="text-xl font-bold tracking-tight">
                  v{entry.version}
                </h2>
                <span className="text-[10px] tracking-widest text-white/30">
                  {entry.date} · {entry.channel}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {entry.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-neon-purple/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-16 text-xs text-white/40">
          When CurXor OS bumps{" "}
          <code className="text-white/50">version.json</code>, run{" "}
          <code className="text-white/50">npm run sync:appliance</code> — changelog
          entries auto-sync from{" "}
          <code className="text-white/50">data/changelog-entries.json</code> and{" "}
          <code className="text-white/50">curxor-os/release-notes.json</code>.{" "}
          <Link href="/" className="text-neon-purple hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
