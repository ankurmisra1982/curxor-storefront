"use client";

import Link from "next/link";
import { useEffect } from "react";

import { siteConfig } from "@/lib/config";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 grid-industrial opacity-40" />
      <main className="relative mx-auto max-w-3xl px-6 py-24">
        <p className="text-[10px] tracking-[0.3em] text-neon-purple">
          SOMETHING BROKE
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          This page failed to render.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white/60">
          The fault is on curxor.ai, not on your machine. Try again, or head back
          to the home page — everything else on the site is still up.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="border border-neon-purple bg-neon-purple px-6 py-3 text-xs font-bold tracking-[0.2em] text-black transition-opacity hover:opacity-90"
          >
            TRY AGAIN
          </button>
          <Link
            href="/"
            className="border border-white/20 px-6 py-3 text-xs tracking-[0.2em] text-white/70 transition-colors hover:border-neon-purple/40 hover:text-neon-purple"
          >
            BACK TO HOME
          </Link>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-white/55">
          If it keeps happening, mail{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-neon-purple hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          {error.digest ? (
            <>
              {" "}
              and quote reference{" "}
              <span className="text-white/70">{error.digest}</span>
            </>
          ) : null}
          .
        </p>
      </main>
    </div>
  );
}
