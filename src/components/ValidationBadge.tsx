import Link from "next/link";

import { CurXorLogo } from "@/components/brand/CurXorLogo";
import { hardwareValidation } from "@/lib/architecture";
import { productIdentity } from "@/lib/config";

type ValidationBadgeProps = {
  className?: string;
  compact?: boolean;
};

const BADGE_SRC = "/brand/curxor-hardware-badge.svg";

/** curXor chassis badge — the box name, not just a logo mark. */
export function ValidationBadge({ className = "", compact = false }: ValidationBadgeProps) {
  if (compact) {
    return (
      <Link
        href="/architecture#validation"
        className={`inline-flex items-center border border-white/15 bg-black/80 px-2 py-1 transition-colors hover:border-neon-purple/40 ${className}`}
        aria-label={hardwareValidation.badgeAriaLabel}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- synced chassis badge SVG */}
        <img
          src={BADGE_SRC}
          alt={`${productIdentity.boxName} — name on the box`}
          className="h-4 w-auto"
          decoding="async"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/architecture#validation"
      className={`group block border border-white/10 bg-black/50 p-5 transition-colors hover:border-neon-purple/30 ${className}`}
      aria-label={hardwareValidation.badgeAriaLabel}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* eslint-disable-next-line @next/next/no-img-element -- synced chassis badge SVG */}
        <img
          src={BADGE_SRC}
          alt={`${productIdentity.boxName} — name on the chassis`}
          className="h-8 w-auto shrink-0"
          decoding="async"
        />
        <div>
          <p className="text-[10px] tracking-[0.25em] text-white/40">THE BOX</p>
          <div className="mt-2 flex items-center gap-3">
            <CurXorLogo variant="wordmark" className="h-5 opacity-95" />
          </div>
          <p className="mt-2 text-sm font-bold text-white/85">
            {productIdentity.chassisNote}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/45 group-hover:text-white/55">
            {hardwareValidation.badgeSummary}
          </p>
        </div>
      </div>
    </Link>
  );
}
