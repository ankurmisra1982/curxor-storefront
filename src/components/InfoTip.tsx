"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { buyerTips, type BuyerTipId } from "@/lib/buyer-tips";

type InfoTipProps = {
  tipId: BuyerTipId;
  /** Visually inline with headings or labels. Default: inline. */
  className?: string;
};

export function InfoTip({ tipId, className = "" }: InfoTipProps) {
  const tip = buyerTips[tipId];
  const panelId = useId();
  const rootRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <span ref={rootRef} className={`relative inline-flex align-middle ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`What is ${tip.title}?`}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/20 text-[9px] leading-none text-white/45 transition-colors hover:border-neon-purple/60 hover:text-neon-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-purple/70"
      >
        ?
      </button>

      {open ? (
        <span
          id={panelId}
          role="tooltip"
          className="absolute left-1/2 top-[calc(100%+0.5rem)] z-50 w-[min(18rem,calc(100vw-3rem))] -translate-x-1/2 border border-white/15 bg-black p-3 shadow-[0_12px_40px_rgba(0,0,0,0.65)] sm:left-0 sm:translate-x-0"
        >
          <span className="pointer-events-none absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-white/15 bg-black sm:left-4 sm:translate-x-0" />
          <p className="text-[10px] font-bold tracking-[0.15em] text-neon-purple">
            {tip.title.toUpperCase()}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/65">{tip.body}</p>
          {"learnMoreHref" in tip && tip.learnMoreHref ? (
            <Link
              href={tip.learnMoreHref}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block text-[10px] tracking-[0.15em] text-neon-purple transition-colors hover:text-neon-glow"
            >
              {tip.learnMoreLabel ?? "Learn more"} →
            </Link>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
