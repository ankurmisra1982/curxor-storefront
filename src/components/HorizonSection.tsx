import { CafeClawVisual } from "@/components/CafeClawVisual";
import { actTwoStory } from "@/lib/home-story";

export function HorizonSection() {
  const { eyebrow, headline, subhead, cafeProof, evolutionTease } = actTwoStory;

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
          <blockquote className="mt-3 max-w-xl border-l-2 border-amber-400/30 pl-4">
            <p className="text-sm italic leading-relaxed tracking-wide text-amber-200/80 sm:text-[15px]">
              {cafeProof.kicker}
            </p>
          </blockquote>
          <h3 className="mt-5 text-lg font-bold tracking-wide text-white/90">{cafeProof.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/50">{cafeProof.body}</p>

          <div className="mt-8">
            <CafeClawVisual />
          </div>
          <p className="mt-4 text-[10px] italic tracking-wide text-white/25">
            Concept preview — real Flight Command Cafe UI ships on appliance.
          </p>
        </div>
      </div>
    </section>
  );
}
