"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neon-purple/30 bg-black/95 p-3 backdrop-blur-sm md:hidden">
      <div className="flex items-center gap-2">
        <Link
          href="/#subscribe"
          className="flex flex-1 items-center justify-center gap-2 bg-neon-purple py-3 text-xs font-bold tracking-[0.2em] text-black"
        >
          JOIN WAITLIST
        </Link>
        <TrackedPreorderLink
          location="mobile-sticky"
          className="shrink-0 border border-white/15 px-3 py-3 text-[10px] tracking-widest text-white/50"
        >
          {siteConfig.preOrderPrice}
        </TrackedPreorderLink>
      </div>
    </div>
  );
}
