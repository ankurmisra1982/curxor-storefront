const RUNGS = [
  {
    id: "jetson",
    label: "ClawBox / Jetson class",
    uma: "8 GB",
    tops: "~67 TOPS",
    note: "Light always-on assistants",
  },
  {
    id: "diy",
    label: "Mac mini / DIY OpenClaw",
    uma: "16–32 GB",
    tops: "Varies",
    note: "You assemble the stack",
  },
  {
    id: "curxor",
    label: "CurXor Nexus",
    uma: "64 GB UMA",
    tops: "126 TOPS",
    note: "Turnkey wealth · work · life Claws",
    highlight: true,
  },
] as const;

export function ComputeLadder() {
  return (
    <section className="mt-14 border border-white/10 bg-black/40 p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            COMPUTE LADDER
          </p>
          <h2 className="mt-2 text-lg font-bold tracking-tight text-white/90">
            Same always-on idea. Different memory class.
          </h2>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-white/40">
          UMA tiers below are model budgets on CurXor hardware — not separate
          products.
        </p>
      </div>

      <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
        {RUNGS.map((rung) => {
          const highlighted = "highlight" in rung && rung.highlight;
          return (
          <div
            key={rung.id}
            className={`p-5 ${highlighted ? "bg-neon-purple/[0.06]" : "bg-black"}`}
          >
            <p
              className={`text-[10px] tracking-[0.2em] ${
                highlighted ? "text-neon-purple" : "text-white/35"
              }`}
            >
              {rung.label.toUpperCase()}
            </p>
            <p className="mt-3 text-2xl font-bold text-white">{rung.uma}</p>
            <p className="mt-1 text-xs text-white/50">{rung.tops} NPU class</p>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              {rung.note}
            </p>
          </div>
          );
        })}
      </div>
    </section>
  );
}
