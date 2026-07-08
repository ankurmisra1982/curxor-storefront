"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  categoryFilmAssets,
  g3Honesty,
  heroFilmLinks,
} from "@/lib/g3-demo";

type FilmId = "badge" | "product";

const FILMS: {
  id: FilmId;
  label: string;
  src: string;
  chyron: string;
  ariaLabel: string;
}[] = [
  {
    id: "badge",
    label: "Category vision · ~61s",
    src: categoryFilmAssets.heroCategoryBadge,
    chyron: "CATEGORY VISION · ~61s · BADGE + VO",
    ariaLabel: "CurXor category vision film — XOR wake, morning routine, dream-state comps",
  },
  {
    id: "product",
    label: "Product proof · ~90s",
    src: categoryFilmAssets.heroCategory,
    chyron: "ACT I PRODUCT CUT · ~90s · G3",
    ariaLabel: "G3 Act I product film — onboarding through three flagship Claws",
  },
];

export function CategoryFilmSection() {
  const [activeFilm, setActiveFilm] = useState<FilmId>("badge");

  const film = FILMS.find((item) => item.id === activeFilm) ?? FILMS[0];

  return (
    <section id="category-film" className="mt-16 border border-white/10 bg-black">
      <div className="border-b border-white/10 px-4 py-3 sm:px-6">
        <p className="text-[10px] tracking-[0.25em] text-neon-purple">CATEGORY FILM · VISION TIER</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">One desk conducts.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
          Two cuts on metal: <strong className="font-normal text-white/70">~61s vision</strong> (badge
          comp · XOR wake · dream-state story) and <strong className="font-normal text-white/70">~90s
          product proof</strong> (onboarding + three Claws). Not cold-traffic homepage hero until G4.
          Badge beat is Figma comp — live Patron Badge ships post-hardware validation.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative min-h-[240px] border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap gap-2 border-b border-white/10 px-3 py-2">
            {FILMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveFilm(item.id)}
                className={`border px-2 py-1 text-[9px] tracking-widest transition-colors ${
                  activeFilm === item.id
                    ? "border-neon-purple/60 bg-neon-purple/10 text-neon-purple"
                    : "border-white/15 text-white/45 hover:border-white/30 hover:text-white/70"
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>
          <video
            key={film.src}
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={categoryFilmAssets.conductorPlate}
            aria-label={film.ariaLabel}
          >
            <source src={film.src} type="video/mp4" />
          </video>
          <p className="absolute bottom-3 left-3 border border-white/20 bg-black/80 px-2 py-1 text-[9px] tracking-widest text-white/60">
            {film.chyron}
          </p>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <Image
            src={categoryFilmAssets.conductorPlate}
            alt="Conductor glance — hero film comp plate"
            width={720}
            height={450}
            className="hidden border border-white/10 lg:block"
          />
          <p className="mt-4 text-xs leading-relaxed text-amber-200/75">
            Command mode · processed on your appliance. Vision cut uses comp badge + practice Capital on
            box. Live badge shoot and full 90s A+B+C merge remain post-validation.
          </p>
          <p className="mt-2 text-[10px] text-white/35">{g3Honesty.deskCapture}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={categoryFilmAssets.heroCategoryBadge}
              className="text-xs tracking-[0.2em] text-neon-purple hover:underline"
            >
              DIRECT MP4 (61s) →
            </a>
            <a
              href={heroFilmLinks.figmaProto}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-neon-purple"
            >
              OPEN FIGMA PROTO →
            </a>
            <Link
              href="/press"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-neon-purple"
            >
              PRESS KIT →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
