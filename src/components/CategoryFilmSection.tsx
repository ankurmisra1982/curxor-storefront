"use client";

import Link from "next/link";
import { useState } from "react";

import { categoryFilmAssets, g3Honesty } from "@/lib/g3-demo";

type FilmId = "badge" | "product";

const FILMS: {
  id: FilmId;
  label: string;
  duration: string;
  src: string;
  caption: string;
  ariaLabel: string;
}[] = [
  {
    id: "badge",
    label: "Category vision",
    duration: "~91s",
    src: categoryFilmAssets.heroCategoryBadge,
    caption:
      "Vision comps with voiceover — desk crew, Crew Cafe, approval gate, personal algorithm on metal you own",
    ariaLabel:
      "CurXor category vision film — desk crew and Crew Cafe on metal you own, approval gate, personal algorithm",
  },
  {
    id: "product",
    label: "Product proof",
    duration: "~89s",
    src: categoryFilmAssets.inceptionReel,
    caption:
      "Onboarding through Capital, Creator, and Outreach on real metal",
    ariaLabel:
      "CurXor product proof film — onboarding through three flagship crewmates on real metal",
  },
];

export function CategoryFilmSection() {
  const [activeFilm, setActiveFilm] = useState<FilmId>("badge");

  const film = FILMS.find((item) => item.id === activeFilm) ?? FILMS[0];

  return (
    <section id="category-film" className="mt-16 border border-white/10 bg-black">
      <div className="border-b border-white/10 px-4 py-4 sm:px-6">
        <p className="text-[10px] tracking-[0.25em] text-white/55">CATEGORY FILM</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
          They live here. You conduct.
        </h2>
        <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/55">
          Watch the category film — desk crew on metal you own, always-on life,
          approval before anything leaves. Or the product cut: Capital, Creator,
          and Outreach running on real MS-S1 hardware.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Category film versions"
        className="flex border-b border-white/10"
      >
        {FILMS.map((item) => {
          const selected = activeFilm === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveFilm(item.id)}
              className={`relative flex-1 px-3 py-3 text-left transition-colors sm:px-6 ${
                selected
                  ? "text-white"
                  : "text-white/55 hover:text-white/70"
              }`}
            >
              <span className="block text-[10px] tracking-[0.2em] uppercase">
                {item.label}
              </span>
              <span
                className={`mt-0.5 block text-[11px] tabular-nums ${
                  selected ? "text-neon-purple" : "text-white/55"
                }`}
              >
                {item.duration}
              </span>
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-0 h-px transition-colors ${
                  selected ? "bg-neon-purple" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/*
        Film is 1440×900 dual-pane (phone | desktop). Full-width + intrinsic
        aspect — never object-cover in a tall cell (that crops to the phone).
      */}
      <div className="relative bg-black">
        <video
          key={film.src}
          className="aspect-[16/10] h-auto w-full bg-black object-contain"
          controls
          playsInline
          preload="none"
          poster={categoryFilmAssets.conductorPlate}
          aria-label={film.ariaLabel}
        >
          <source src={film.src} type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-[11px] leading-relaxed text-white/55">
          {film.caption}
          <span className="text-white/55"> · {g3Honesty.deskCapture}</span>
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
          {activeFilm === "badge" ? (
            <a
              href={categoryFilmAssets.heroCategoryBadgeShort}
              className="text-[10px] tracking-[0.18em] text-white/55 transition-colors hover:text-neon-purple"
            >
              SHORTER VERSION (~62S) →
            </a>
          ) : null}
          <Link
            href="/press"
            className="text-[10px] tracking-[0.18em] text-white/55 transition-colors hover:text-neon-purple"
          >
            PRESS KIT →
          </Link>
        </div>
      </div>
    </section>
  );
}
