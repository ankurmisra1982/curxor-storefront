import Link from "next/link";

import { SubscribeForm } from "@/components/SubscribeForm";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";
import type { PreorderLocation } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";

type SubscribeFirstCtasProps = {
  preorderLocation: PreorderLocation;
  /** Compact: waitlist link + pre-order text. Full: inline subscribe form. */
  variant?: "compact" | "full";
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function SubscribeFirstCtas({
  preorderLocation,
  variant = "compact",
  secondaryHref,
  secondaryLabel,
  className = "",
}: SubscribeFirstCtasProps) {
  if (variant === "full") {
    return (
      <div className={`space-y-4 ${className}`}>
        <SubscribeForm variant="hero" />
        <div className="flex flex-wrap items-center gap-4">
          <TrackedPreorderLink
            location={preorderLocation}
            className="text-xs tracking-[0.2em] text-white/50 transition-colors hover:text-neon-purple"
          >
            Pre-order · {siteConfig.preOrderPrice} →
          </TrackedPreorderLink>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="text-xs tracking-[0.2em] text-white/50 transition-colors hover:text-neon-purple"
            >
              {secondaryLabel} →
            </Link>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <Link
        href="/#subscribe"
        className="inline-flex bg-neon-purple px-6 py-4 text-xs font-bold tracking-[0.2em] text-black transition-all hover:bg-neon-glow"
      >
        JOIN WAITLIST
      </Link>
      <TrackedPreorderLink
        location={preorderLocation}
        className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/60 hover:text-neon-purple"
      >
        PRE-ORDER {siteConfig.preOrderPrice}
      </TrackedPreorderLink>
      {secondaryHref && secondaryLabel ? (
        <Link
          href={secondaryHref}
          className="px-2 py-4 text-xs tracking-[0.2em] text-white/45 transition-colors hover:text-neon-purple"
        >
          {secondaryLabel} →
        </Link>
      ) : null}
    </div>
  );
}
