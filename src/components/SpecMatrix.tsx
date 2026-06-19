import { specColumns } from "@/lib/config";

export function SpecMatrix() {
  return (
    <section id="specs" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              TECHNICAL BRIEF
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Spec Sheet Matrix
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed tracking-wide text-white/40">
            Full-stack sovereignty. Hardware, network spine, and OS engineered
            for physical AI at the edge.
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {specColumns.map((column) => (
            <div
              key={column.id}
              className="group relative bg-black p-8 transition-colors hover:bg-white/[0.02]"
            >
              <div className="absolute left-0 top-0 h-px w-0 bg-neon-purple transition-all duration-500 group-hover:w-full" />

              <h3 className="mb-8 text-xs font-bold tracking-[0.3em] text-neon-purple">
                {column.label}
              </h3>

              <ul className="space-y-6">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-white/40" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 text-[10px] tracking-widest text-white/20">
                SYS.{column.id.toUpperCase()} // OK
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
