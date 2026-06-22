import { dayOneSteps } from "@/lib/config";

export function DayOneHub() {
  return (
    <section id="day-one" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            FLIGHT COMMAND · DAY ONE
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Flight Command, day one
          </h2>
          <p className="mt-3 text-sm text-white/45">
            Home hub · grouped Claws · chat + skills · Settings when you want more.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dayOneSteps.map((step) => (
            <article
              key={step.title}
              className="border-industrial bg-black p-6 transition-colors hover:border-neon-purple/30"
            >
              <h3 className="text-sm font-bold tracking-wide text-white/90">
                {step.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/50">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
