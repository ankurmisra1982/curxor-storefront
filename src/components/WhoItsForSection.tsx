import { whoItsForSection } from "@/lib/persona-blocks";

export function WhoItsForSection() {
  return (
    <section id="who-its-for" className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">WHO IT&apos;S FOR</p>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          {whoItsForSection.headline}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/50">
          {whoItsForSection.intro}
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {whoItsForSection.columns.map((column) => (
            <div key={column.title} className="border-industrial bg-black p-6">
              <h3 className="text-sm font-bold tracking-wide text-white/90">{column.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{column.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
          {whoItsForSection.footer}
        </p>
      </div>
    </section>
  );
}
