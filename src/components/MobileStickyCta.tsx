"use client";

import { siteConfig } from "@/lib/config";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neon-purple/30 bg-black/95 p-3 backdrop-blur-sm md:hidden">
      <TrackedPreorderLink
        location="mobile-sticky"
        className="flex w-full items-center justify-center gap-2 bg-neon-purple py-3 text-xs font-bold tracking-[0.2em] text-black"
      >
        PRE-ORDER {siteConfig.preOrderPrice}
        <span>→</span>
      </TrackedPreorderLink>
    </div>
  );
}
