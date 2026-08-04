import Link from "next/link";

import { CopyLinkButton } from "@/components/CopyLinkButton";
import { siteConfig } from "@/lib/config";
import type { JournalBlock, JournalEntry } from "@/lib/journal";
import { formatJournalDate, journalKindLabel } from "@/lib/journal";

function Block({ block }: { block: JournalBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 text-xl font-bold tracking-tight text-white sm:text-2xl">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-2 border-neon-purple/60 pl-5 text-base leading-relaxed text-white/75 italic sm:text-lg">
          {block.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70 sm:text-base">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return (
        <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed">
          {block.text}
        </p>
      );
  }
}

export function JournalArticle({ essay }: { essay: JournalEntry }) {
  const articleUrl = `${siteConfig.siteUrl}/journal/${essay.slug}`;

  return (
    <article className="mx-auto max-w-2xl px-6 py-10 sm:py-14">
      <p className="text-[10px] tracking-[0.3em] text-neon-purple">
        JOURNAL · {journalKindLabel[essay.kind].toUpperCase()}
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {essay.title}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-white/55">{essay.excerpt}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/10 pb-6 text-[10px] tracking-widest text-white/40">
        <time dateTime={essay.publishedAt}>
          {formatJournalDate(essay.publishedAt).toUpperCase()}
        </time>
        <span aria-hidden>·</span>
        <span className="normal-case tracking-wide">{essay.author}</span>
        <span aria-hidden>·</span>
        <span className="normal-case tracking-wide text-white/35">
          {essay.sourceLabel}
        </span>
        <span aria-hidden>·</span>
        <CopyLinkButton url={articleUrl} />
        {essay.xUrl ? (
          <>
            <span aria-hidden>·</span>
            <a
              href={essay.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-purple transition-colors hover:text-white/80"
            >
              READ ON X →
            </a>
          </>
        ) : null}
      </div>

      <div className="mt-2">
        {essay.body.map((block, index) => (
          <Block key={`${block.type}-${index}`} block={block} />
        ))}
      </div>

      <nav
        aria-label="Related"
        className="mt-14 border-t border-white/10 pt-8"
      >
        <p className="text-[10px] tracking-[0.3em] text-white/40">CONTINUE</p>
        <ul className="mt-4 flex flex-col gap-3">
          {essay.relatedLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-neon-purple transition-colors hover:text-white/80"
              >
                {link.label} →
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/journal"
              className="text-sm text-white/50 transition-colors hover:text-neon-purple"
            >
              All journal →
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}
