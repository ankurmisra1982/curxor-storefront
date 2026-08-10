import Link from "next/link";

import { SubscribeForm } from "@/components/SubscribeForm";
import type { PreorderLocation } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";

type SubscribeFirstCtasProps = {
  /** @deprecated Waitlist-only — kept so call sites need not churn. */
  preorderLocation?: PreorderLocation;
  /** Compact: waitlist link. Full: inline subscribe form. */
  variant?: "compact" | "full";
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
  showHonesty?: boolean;
};

export function SubscribeFirstCtas({
  variant = "compact",
  secondaryHref,
  secondaryLabel,
  className = "",
  showHonesty = true,
}: SubscribeFirstCtasProps) {
  if (variant === "full") {
    return (
      <div className={`space-y-4 ${className}`}>
        <SubscribeForm variant="hero" />
        {showHonesty ? (
          <p className="text-xs leading-relaxed text-white/55">
            {siteConfig.ctaHonesty}
          </p>
        ) : null}
        {secondaryHref && secondaryLabel ? (
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={secondaryHref}
              className="text-xs tracking-[0.2em] text-white/60 transition-colors hover:text-neon-purple"
            >
              {secondaryLabel} →
            </Link>
          </div>
        ) : null}
      </div>
    );
  }

  // Stacks to equal-width buttons on mobile; ragged intrinsic widths look broken there.
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <Link
          href="/#subscribe"
          className="inline-flex justify-center bg-neon-purple px-6 py-4 text-xs font-bold tracking-[0.2em] text-black transition-all hover:bg-neon-glow"
        >
          JOIN WAITLIST
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className="px-2 py-2 text-center text-xs tracking-[0.2em] text-white/55 transition-colors hover:text-neon-purple sm:py-4 sm:text-left"
          >
            {secondaryLabel} →
          </Link>
        ) : null}
      </div>
      {showHonesty ? (
        <p className="text-xs leading-relaxed text-white/55">
          {siteConfig.ctaHonesty}
        </p>
      ) : null}
    </div>
  );
}
