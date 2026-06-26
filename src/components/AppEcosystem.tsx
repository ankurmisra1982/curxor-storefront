"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  apps,
  clawCategoryOrder,
  type StorefrontApp,
} from "@/lib/config";
import { gtmTierBadgeClass, gtmTierLegend } from "@/lib/claw-gtm-tiers";

const CLAW_PAGE_HREFS: Partial<Record<string, string>> = {
  "capital-claw": "/capital",
  "creator-claw": "/creator",
  "outreach-claw": "/outreach",
  "signal-claw": "/signal",
};

const FEATURED_CLAW_IDS = [
  "my-capital",
  "my-content-creator",
  "my-work",
  "claw-forge",
  "my-vital",
  "my-family",
] as const;

type AppEcosystemProps = {
  variant?: "full" | "featured";
};

export function AppEcosystem({ variant = "full" }: AppEcosystemProps) {
  const featuredApps = useMemo(
    () =>
      FEATURED_CLAW_IDS.map((id) => apps.find((app) => app.applianceId === id)).filter(
        (app): app is StorefrontApp => Boolean(app)
      ),
    []
  );

  const groupedApps = useMemo(() => {
    return clawCategoryOrder.map((categoryId) => ({
      categoryId,
      label:
        apps.find((app) => app.category === categoryId)?.categoryLabel ??
        categoryId,
      apps: apps.filter((app) => app.category === categoryId),
    }));
  }, []);

  const flatApps = apps;
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % flatApps.length);
  }, [flatApps.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + flatApps.length) % flatApps.length);
  }, [flatApps.length]);

  useEffect(() => {
    if (variant === "featured") return;

    let timer: ReturnType<typeof setInterval> | undefined;

    function start() {
      timer = setInterval(next, 5000);
    }

    function stop() {
      if (timer) clearInterval(timer);
    }

    function onVisibilityChange() {
      stop();
      if (!document.hidden) start();
    }

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [next, variant]);

  if (variant === "featured") {
    return (
      <section id="apps" className="relative border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
                THE STACK
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Claw verticals + The Forge
              </h2>
            </div>
            <p className="max-w-sm text-xs text-white/40">
              Enable your crew in Settings. Mint custom Claws from The Forge.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} compact />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/architecture"
              className="text-xs tracking-[0.2em] text-neon-purple hover:underline"
            >
              FULL ARCHITECTURE + ROSTER →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apps" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              DIGITAL EMPLOYEES
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Claw Verticals
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed tracking-wide text-white/40">
            126 TOPS running your stack — grouped like Flight Command nav. Depth labels:
            Flagship · Forge · Cafe · Preview.
          </p>
        </div>

        <div className="mb-10 hidden flex-wrap gap-3 sm:flex">
          {gtmTierLegend.map((tier) => (
            <div
              key={tier.id}
              className="max-w-xs border border-white/10 bg-black/40 px-4 py-3"
            >
              <p className="text-[10px] font-bold tracking-[0.2em] text-neon-purple">
                {tier.label.toUpperCase()}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-white/45">{tier.body}</p>
            </div>
          ))}
        </div>

        <div className="hidden space-y-14 sm:block">
          {groupedApps.map((group) => (
            <div key={group.categoryId}>
              <div className="mb-6 flex items-baseline gap-3">
                <h3 className="text-sm font-bold tracking-wide text-white/80">
                  {group.label}
                </h3>
                <span className="text-[10px] tracking-widest text-white/25">
                  {group.apps.length} CLAW{group.apps.length === 1 ? "" : "S"}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.apps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative overflow-hidden border-industrial">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {flatApps.map((app) => (
                <div key={app.id} className="w-full shrink-0">
                  <AppCard app={app} featured />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous app"
              className="border-industrial px-4 py-2 text-xs tracking-widest text-white/60 transition-colors hover:border-neon-purple/50 hover:text-neon-purple"
            >
              ← PREV
            </button>

            <div className="flex gap-2">
              {flatApps.map((app, i) => (
                <button
                  key={app.id}
                  type="button"
                  aria-label={`Go to ${app.name}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 transition-all ${
                    i === activeIndex
                      ? "w-6 bg-neon-purple"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next app"
              className="border-industrial px-4 py-2 text-xs tracking-widest text-white/60 transition-colors hover:border-neon-purple/50 hover:text-neon-purple"
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppCard({
  app,
  featured = false,
  compact = false,
}: {
  app: StorefrontApp;
  featured?: boolean;
  compact?: boolean;
}) {
  const href = CLAW_PAGE_HREFS[app.id];
  const inner = (
    <>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-lg text-neon-purple transition-colors group-hover:border-neon-purple/50">
          {app.icon}
        </div>
        <span
          className={`shrink-0 border px-2 py-0.5 text-[9px] tracking-[0.15em] ${gtmTierBadgeClass(app.gtmTier)}`}
        >
          {app.gtmTierLabel.toUpperCase()}
        </span>
      </div>

      <h3 className="mb-1 text-sm font-bold tracking-wide">{app.name}</h3>

      <p className="text-[11px] font-medium leading-relaxed text-neon-purple/80">
        {app.tagline}
      </p>

      {!compact ? (
        <p className="mt-2 flex-1 text-xs leading-relaxed text-white/50">
          {app.description}
        </p>
      ) : null}

      {href ? (
        <p className="mt-4 text-[10px] tracking-[0.2em] text-neon-purple/70 transition-colors group-hover:text-neon-purple">
          LEARN MORE →
        </p>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group relative flex flex-col border-industrial bg-black transition-all hover:border-neon-purple/40 ${
          featured ? "p-8" : compact ? "p-5" : "p-6"
        }`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <article
      className={`group relative flex flex-col border-industrial bg-black transition-all hover:border-neon-purple/40 ${
        featured ? "p-8" : compact ? "p-5" : "p-6"
      }`}
    >
      {inner}
    </article>
  );
}
