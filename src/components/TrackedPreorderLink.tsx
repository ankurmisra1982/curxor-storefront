"use client";

import Link from "next/link";

/**
 * Safety shim — commercial path is waitlist_only (FOUNDER-PROTOCOL S0).
 * Never link cold traffic to Stripe. Prefer Join Waitlist CTAs instead of this component.
 */
type TrackedPreorderLinkProps = {
  location?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  tabIndex?: number;
};

export function TrackedPreorderLink({
  className,
  children,
  onClick,
  tabIndex,
}: TrackedPreorderLinkProps) {
  return (
    <Link
      href="/#subscribe"
      className={className}
      tabIndex={tabIndex}
      onClick={() => {
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
