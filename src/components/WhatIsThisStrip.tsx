import { symphonyWhatIsThis } from "@/lib/symphony-metaphor";

const columns = [
  symphonyWhatIsThis.box,
  symphonyWhatIsThis.os,
  symphonyWhatIsThis.claws,
] as const;

export function WhatIsThisStrip() {
  return (
    <section id="what-is-this" className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <p className="mb-8 text-[10px] tracking-[0.3em] text-neon-purple">WHAT IS THIS?</p>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold tracking-wide text-white/90">{column.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{column.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
          {symphonyWhatIsThis.footer}
        </p>
      </div>
    </section>
  );
}
