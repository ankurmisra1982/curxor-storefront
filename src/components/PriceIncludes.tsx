import { priceIncludes } from "@/lib/marketing";

export function PriceIncludes() {
  const { headline, subhead, items, bareMetalAnchor } = priceIncludes;

  return (
    <section id="included" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            BUNDLE VALUE
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50">{subhead}</p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="bg-black p-8">
              <h3 className="text-sm font-bold tracking-wide text-white/90">
                {item.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/50">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 border border-white/10 bg-white/[0.02] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-white/35">
              DIY ANCHOR
            </p>
            <p className="mt-2 text-sm font-bold text-white/80">
              {bareMetalAnchor.label}
            </p>
            <p className="mt-1 text-xs text-white/45">{bareMetalAnchor.note}</p>
          </div>
          <p className="mt-4 text-2xl font-bold text-white/60 sm:mt-0">
            {bareMetalAnchor.price}
          </p>
        </div>
      </div>
    </section>
  );
}
