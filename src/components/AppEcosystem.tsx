"use client";

import { useCallback, useEffect, useState } from "react";
import { apps } from "@/lib/config";

export function AppEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % apps.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + apps.length) % apps.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="apps" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              OUT-OF-THE-BOX
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              App Ecosystem
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed tracking-wide text-white/40">
            Five production-ready applications ship with every CurXor nexus. No
            app store. No cloud provisioning.
          </p>
        </div>

        <div className="hidden gap-4 md:grid md:grid-cols-5">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative overflow-hidden border-industrial">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {apps.map((app) => (
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
              {apps.map((app, i) => (
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
  app: (typeof apps)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col border-industrial bg-black transition-all hover:border-neon-purple/40 ${
        featured ? "p-8" : "p-6"
      }`}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center border border-white/10 text-xl text-neon-purple transition-colors group-hover:border-neon-purple/50 group-hover:shadow-[0_0_16px_rgba(191,90,242,0.2)]">
        {app.icon}
      </div>

      <h3 className="mb-3 text-sm font-bold tracking-wide">{app.name}</h3>

      <p className="flex-1 text-xs leading-relaxed text-white/50">
        {app.description}
      </p>

      <div className="mt-6 text-[10px] tracking-widest text-white/20">
        BUNDLED // v1.0
      </div>
    </article>
  );
}
