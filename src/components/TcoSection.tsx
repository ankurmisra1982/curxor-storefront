import { InfoTip } from "@/components/InfoTip";
import { tcoScenarios } from "@/lib/marketing";

export function TcoSection() {
  return (
    <section id="tco" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            TOTAL COST
          </p>
          <h2 className="flex flex-wrap items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {tcoScenarios.headline}
            <InfoTip tipId="illustrativeSpend" className="mt-1" />
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            {tcoScenarios.subhead}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-[10px] tracking-[0.2em] text-white/35">
                <th className="py-4 pr-4 font-normal">SCENARIO</th>
                <th className="py-4 pr-4 font-normal">UPFRONT</th>
                <th className="py-4 pr-4 font-normal">MONTHLY</th>
                <th className="py-4 pr-4 font-normal">~4 YEARS</th>
                <th className="py-4 font-normal">NOTES</th>
              </tr>
            </thead>
            <tbody>
              {tcoScenarios.rows.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b border-white/10 ${
                    "highlight" in row && row.highlight
                      ? "bg-neon-purple/[0.04] ring-1 ring-inset ring-neon-purple/30"
                      : ""
                  }`}
                >
                  <td className="py-4 pr-4 font-bold text-white/85">
                    {row.label}
                  </td>
                  <td className="py-4 pr-4 text-white/60">{row.upfront}</td>
                  <td className="py-4 pr-4 text-white/60">{row.monthly}</td>
                  <td
                    className={`py-4 pr-4 ${
                      "highlight" in row && row.highlight
                        ? "font-bold text-neon-purple"
                        : "text-white/70"
                    }`}
                  >
                    {row.fourYear}
                  </td>
                  <td className="py-4 text-white/45">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-[10px] leading-relaxed text-white/30">
          {tcoScenarios.methodology}
        </p>
      </div>
    </section>
  );
}
