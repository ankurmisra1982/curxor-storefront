import { symphonyWhatIsThis } from "@/lib/symphony-metaphor";

const columns = [
  symphonyWhatIsThis.box,
  symphonyWhatIsThis.os,
  symphonyWhatIsThis.claws,
] as const;

export function WhatIsThisStrip() {
  return (
    <section id="what-is-this" className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        <p className="mb-6 text-[10px] tracking-[0.3em] text-neon-purple">WHAT IS THIS?</p>

        <div className="grid gap-6 md:grid-cols-3 md:gap-6">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold tracking-wide text-white/90">{column.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{column.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 border-t border-white/10 pt-5 text-xs text-white/40">
          {symphonyWhatIsThis.footer}
        </p>
      </div>
    </section>
  );
}
