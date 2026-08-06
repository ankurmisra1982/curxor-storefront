"use client";

import { DeskWalkthroughPreview } from "@/components/DeskWalkthroughPreview";
import { signalWalkthrough } from "@/lib/signal-page";

/** Signal / Neural Link walkthrough — VO timed to full cut; play at 1× from start. */
export function SignalOptimusPreview() {
  return (
    <DeskWalkthroughPreview
      src={signalWalkthrough.src}
      ariaLabel={signalWalkthrough.ariaLabel}
    />
  );
}
