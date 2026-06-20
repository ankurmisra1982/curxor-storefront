"use client";

import { useEffect } from "react";
import { trackScrollDepth, type ScrollDepth } from "@/lib/analytics";

const DEPTH_MARKS: ScrollDepth[] = [25, 50, 75, 100];

export function ScrollDepthTracker() {
  useEffect(() => {
    const fired = new Set<ScrollDepth>();

    function onScroll() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = (window.scrollY / scrollable) * 100;

      for (const mark of DEPTH_MARKS) {
        if (fired.has(mark) || progress < mark) continue;
        fired.add(mark);
        trackScrollDepth(mark);
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
