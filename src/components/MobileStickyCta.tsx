"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/config";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";

/** Roughly one hero: below this the page still shows its own primary CTA. */
const REVEAL_AFTER_PX = 560;

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > REVEAL_AFTER_PX);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-neon-purple/30 bg-black/95 p-3 backdrop-blur-sm transition-transform duration-200 md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="flex items-center gap-2">
        <Link
          href="/#subscribe"
          tabIndex={visible ? undefined : -1}
          className="flex flex-1 items-center justify-center gap-2 bg-neon-purple py-3 text-xs font-bold tracking-[0.2em] text-black"
        >
          JOIN WAITLIST
        </Link>
        <TrackedPreorderLink
          location="mobile-sticky"
          tabIndex={visible ? undefined : -1}
          className="shrink-0 border border-white/15 px-3 py-3 text-[10px] tracking-widest text-white/60"
        >
          {siteConfig.preOrderPrice}
        </TrackedPreorderLink>
      </div>
    </div>
  );
}
