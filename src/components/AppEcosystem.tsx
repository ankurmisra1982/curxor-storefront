"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  apps,
  applianceVersion,
  clawCategoryOrder,
  type StorefrontApp,
} from "@/lib/config";

export function AppEcosystem() {
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
  }, [next]);

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
            126 TOPS running 8 bundled verticals — grouped like Flight Command
            nav. Plus infinite custom Claws from The Forge.
          </p>
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
}: {
  app: StorefrontApp;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col border-industrial bg-black transition-all hover:border-neon-purple/40 ${
        featured ? "p-8" : "p-6"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 text-xl text-neon-purple transition-colors group-hover:border-neon-purple/50 group-hover:shadow-[0_0_16px_rgba(191,90,242,0.2)]">
          {app.icon}
        </div>
        <span className="text-[10px] tracking-widest text-white/25">
          {app.categoryLabel}
        </span>
      </div>

      <h3 className="mb-2 text-sm font-bold tracking-wide">{app.name}</h3>

      <p className="mb-3 text-[11px] font-medium leading-relaxed text-neon-purple/80">
        {app.tagline}
      </p>

      <p className="flex-1 text-xs leading-relaxed text-white/50">
        {app.description}
      </p>

      <div className="mt-6 text-[10px] tracking-widest text-white/20">
        BUNDLED // v{applianceVersion}
      </div>
    </article>
  );
}
