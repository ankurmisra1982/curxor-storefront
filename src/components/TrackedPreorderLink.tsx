"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { trackPreorderClick, type PreorderLocation } from "@/lib/analytics";

type TrackedPreorderLinkProps = {
  location: PreorderLocation;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  tabIndex?: number;
};

export function TrackedPreorderLink({
  location,
  className,
  children,
  onClick,
  tabIndex,
}: TrackedPreorderLinkProps) {
  return (
    <Link
      href={siteConfig.stripeCheckoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      tabIndex={tabIndex}
      onClick={() => {
        trackPreorderClick(location);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
