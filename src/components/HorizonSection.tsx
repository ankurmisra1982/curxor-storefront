import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import { actTwoStory } from "@/lib/home-story";

function resolveCafeCaptures() {
  return actTwoStory.cafeProof.captures.filter((capture) =>
    fs.existsSync(path.join(process.cwd(), "public", capture.src.replace(/^\//, "")))
  );
}

export function HorizonSection() {
  const { eyebrow, headline, subhead, cafeProof, evolutionTease } = actTwoStory;
  const captures = resolveCafeCaptures();

  return (
    <section id="horizon" className="relative border-t border-white/10 bg-white/[0.02] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">{eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{headline}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50">{subhead}</p>
          <p className="mt-4 text-xs italic text-white/35">{evolutionTease}</p>
        </div>

        <div className="mt-12 border border-amber-400/15 bg-black/40 p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-amber-200/70">CAFE TIER · PROOF</p>
          <h3 className="mt-2 text-lg font-bold tracking-wide text-white/90">{cafeProof.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/50">{cafeProof.body}</p>

          {captures.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {captures.map((capture) => (
                <figure key={capture.src} className="border border-white/10 bg-black p-2">
                  <Image
                    src={capture.src}
                    alt={capture.alt}
                    width={1440}
                    height={900}
                    className="h-auto w-full border border-white/5"
                  />
                  <figcaption className="px-1 pt-2 text-[10px] tracking-[0.2em] text-white/35">
                    {capture.caption.toUpperCase()}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p className="mt-6 border border-dashed border-white/10 px-4 py-6 text-xs leading-relaxed text-white/35">
              Flight Command Cafe captures land here after the next demo-pack run — pixel room and
              ascension panel from curxor-os dev-qa.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
