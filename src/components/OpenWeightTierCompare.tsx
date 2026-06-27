import Link from "next/link";
import {
  hardwareTierCompare,
  openWeightComputeLadder,
} from "@/lib/compute-ladder";

type Variant = "press" | "pricing";

export function OpenWeightTierCompare({ variant = "pricing" }: { variant?: Variant }) {
  const { eyebrow, hero, subhead, paragraph, footnote, evidence } =
    openWeightComputeLadder;
  const showNarrative = variant === "press";

  return (
    <section
      id="compute-ladder"
      className="scroll-mt-24 border border-white/10 bg-black/40 p-6 sm:p-8"
    >
      <p className="text-[10px] tracking-[0.25em] text-neon-purple">{eyebrow}</p>

      {showNarrative ? (
        <>
          <h2 className="mt-3 text-xl font-bold tracking-tight text-white/95 sm:text-2xl">
            {hero}
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-white/70">
            {subhead}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/55">{paragraph}</p>
        </>
      ) : (
        <>
          <h2 className="mt-2 text-lg font-bold tracking-tight text-white/90">
            Compare tiers
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/50">
            {subhead}{" "}
            <Link href="/press#compute-ladder" className="text-neon-purple hover:underline">
              Press kit
            </Link>
            .
          </p>
        </>
      )}

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-4 pr-4 text-[10px] tracking-[0.2em] text-white/35">
                TIER
              </th>
              {hardwareTierCompare.columns.map((col) => (
                <th
                  key={col.id}
                  className={`pb-4 px-3 text-left ${
                    col.highlight ? "text-neon-purple" : "text-white/70"
                  }`}
                >
                  <span className="block text-base font-bold">{col.name}</span>
                  <span className="mt-1 block text-xs font-normal text-white/50">
                    {col.price} · {col.memory} · {col.status.toLowerCase()}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hardwareTierCompare.rows.map((row) => (
              <tr key={row.label} className="border-b border-white/10 last:border-b-0">
                <th className="py-4 pr-4 align-top text-[10px] font-normal tracking-[0.15em] text-white/40">
                  {row.label.toUpperCase()}
                </th>
                <td className="py-4 px-3 align-top text-xs leading-relaxed text-white/65">
                  {row.standard}
                </td>
                <td className="py-4 px-3 align-top text-xs leading-relaxed text-white/55">
                  {row.pro128}
                </td>
                <td className="py-4 px-3 align-top text-xs leading-relaxed text-white/45">
                  {row.studio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-white/40">
        <strong className="font-semibold text-white/55">Honest footnote:</strong>{" "}
        {footnote}
      </p>

      <p className="mt-3 text-xs leading-relaxed text-white/35">
        Directional evidence (same silicon class as MS-S1):{" "}
        <a
          href={evidence.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-purple hover:underline"
        >
          {evidence.label}
        </a>{" "}
        — {evidence.note}
      </p>

      {variant === "pricing" ? (
        <p className="mt-4 text-xs text-white/40">
          CurXor Studio is post-traction horizon — no checkout.{" "}
          <Link href="/press#compute-ladder" className="text-neon-purple hover:underline">
            Press ladder copy
          </Link>
        </p>
      ) : (
        <p className="mt-4 text-xs text-white/40">
          Tier compare also on{" "}
          <Link href="/pricing#compute-ladder" className="text-neon-purple hover:underline">
            /pricing
          </Link>
          . Full doc:{" "}
          <span className="text-white/50">docs/COMPUTE-LADDER.md</span> in storefront repo.
        </p>
      )}
    </section>
  );
}
