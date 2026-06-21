import Link from "next/link";

type ValidationBadgeProps = {
  className?: string;
  compact?: boolean;
};

/** Pre-hardware badge — honest, not loud. */
export function ValidationBadge({ className = "", compact = false }: ValidationBadgeProps) {
  if (compact) {
    return (
      <Link
        href="/architecture#validation"
        className={`inline-flex items-center gap-2 border border-white/15 bg-white/[0.02] px-2.5 py-1 text-[9px] tracking-[0.15em] text-white/45 transition-colors hover:border-neon-purple/40 hover:text-neon-purple/80 ${className}`}
      >
        <span className="h-1 w-1 rounded-full bg-amber-400/80" />
        MS-S1 MAX · VALIDATION IN PROGRESS
      </Link>
    );
  }

  return (
    <Link
      href="/architecture#validation"
      className={`group block border border-white/10 bg-black/50 p-5 transition-colors hover:border-neon-purple/30 ${className}`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400/90 shadow-[0_0_8px_rgba(251,191,36,0.35)]" />
        <div>
          <p className="text-[10px] tracking-[0.25em] text-white/40">
            HARDWARE VALIDATION
          </p>
          <p className="mt-1 text-sm font-bold text-white/85">
            Built for MINISFORUM MS-S1 MAX class
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/45 group-hover:text-white/55">
            ROCm, UMA, and mesh benchmarks run when production silicon lands.
            We publish validated numbers — not marketing guesses.
          </p>
        </div>
      </div>
    </Link>
  );
}
