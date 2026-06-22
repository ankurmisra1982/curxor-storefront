import type { ClawOperator } from "@/lib/claw-operators";

type OperatorQuoteProps = {
  operator: ClawOperator;
  compact?: boolean;
};

export function OperatorQuote({ operator, compact }: OperatorQuoteProps) {
  if (compact) {
    return (
      <aside className="border-l-2 border-neon-purple/50 bg-neon-purple/[0.03] px-5 py-4">
        <p className="text-[10px] tracking-[0.2em] text-neon-purple">
          MEET {operator.name.toUpperCase()}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          &ldquo;{operator.hook}&rdquo;
        </p>
        <p className="mt-2 text-[10px] text-white/35">{operator.role}</p>
      </aside>
    );
  }

  return (
    <aside className="border border-white/10 bg-black p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-neon-purple/40 font-mono text-xl text-neon-purple">
          {operator.glyph}
        </div>
        <div>
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">
            MEET {operator.name.toUpperCase()} · {operator.claw}
          </p>
          <p className="mt-1 text-[10px] tracking-widest text-white/35">
            {operator.role}
          </p>
          <blockquote className="mt-4 text-base font-medium leading-relaxed text-white/80 sm:text-lg">
            &ldquo;{operator.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </aside>
  );
}
