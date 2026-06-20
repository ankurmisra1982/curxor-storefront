"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { trackPreorderClick, type PreorderLocation } from "@/lib/analytics";

type TrackedPreorderLinkProps = {
  location: PreorderLocation;
  className?: string;
  children: React.ReactNode;
};

export function TrackedPreorderLink({
  location,
  className,
  children,
}: TrackedPreorderLinkProps) {
  return (
    <Link
      href={siteConfig.stripeCheckoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackPreorderClick(location)}
    >
      {children}
    </Link>
  );
}
