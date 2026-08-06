"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { JournalEntry, JournalKind } from "@/lib/journal";
import {
  formatJournalDate,
  journalArchiveLinks,
  journalKindLabel,
} from "@/lib/journal";

const FILTERS: Array<{ id: "all" | JournalKind; label: string }> = [
  { id: "all", label: "All" },
  { id: "essay", label: "Essays" },
  { id: "update", label: "Updates" },
  { id: "release", label: "Releases" },
  { id: "brief", label: "Briefs" },
];

export function JournalIndex({ entries }: { entries: JournalEntry[] }) {
  const [filter, setFilter] = useState<"all" | JournalKind>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? entries
        : entries.filter((entry) => entry.kind === filter),
    [entries, filter]
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div
        className="flex flex-wrap gap-2 border-b border-white/10 pb-6"
        role="tablist"
        aria-label="Journal filters"
      >
        {FILTERS.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.id)}
              className={
                active
                  ? "border border-neon-purple/50 bg-neon-purple/10 px-3 py-1.5 text-[10px] tracking-[0.2em] text-neon-purple"
                  : "border border-white/10 px-3 py-1.5 text-[10px] tracking-[0.2em] text-white/55 transition-colors hover:border-white/25 hover:text-white/70"
              }
            >
              {item.label.toUpperCase()}
            </button>
          );
        })}
      </div>

      <ul className="divide-y divide-white/10 border-b border-white/10">
        {visible.map((entry) => (
          <li key={entry.slug}>
            <Link
              href={`/journal/${entry.slug}`}
              className="group block py-8 transition-colors hover:bg-white/[0.02]"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] tracking-[0.25em] text-white/55">
                <span className="text-neon-purple/80">
                  {journalKindLabel[entry.kind].toUpperCase()}
                </span>
                <span aria-hidden>·</span>
                <time dateTime={entry.publishedAt}>
                  {formatJournalDate(entry.publishedAt).toUpperCase()}
                </time>
              </div>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-white group-hover:text-neon-purple sm:text-2xl">
                {entry.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                {entry.excerpt}
              </p>
              <p className="mt-4 text-[10px] tracking-[0.2em] text-neon-purple">
                READ →
              </p>
            </Link>
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="py-10 text-sm text-white/65">No entries in this filter.</p>
      ) : null}

      <div className="mt-12 border-t border-white/10 pt-8">
        <p className="text-[10px] tracking-[0.3em] text-white/55">ARCHIVES</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
          Journal ships the pieces worth a URL. Full release history and media
          kit stay on their own pages.
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {journalArchiveLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-neon-purple transition-colors hover:text-white/80"
              >
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
