"use client";

import { useRef, useState } from "react";

export type DeskWalkthroughPreviewProps = {
  /** H.264 mp4 — primary for Safari + Chrome. */
  src: string;
  /** Optional WebM alternate. Listed after mp4 so broken VP9 never wins. */
  webmSrc?: string;
  ariaLabel: string;
  playLabel?: string;
};

/** Light Optimus-style walkthrough embed — one composition, native controls after play. */
export function DeskWalkthroughPreview({
  src,
  webmSrc,
  ariaLabel,
  playLabel = "PLAY WALKTHROUGH",
}: DeskWalkthroughPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    void video.play();
  }

  return (
    <div className="relative bg-[#030304]">
      <video
        ref={videoRef}
        className="h-auto w-full"
        controls={started}
        playsInline
        preload="metadata"
        onPlay={() => setStarted(true)}
      >
        <source src={src} type="video/mp4" />
        {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
      </video>

      {!started ? (
        <button
          type="button"
          onClick={handlePlay}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 transition-colors hover:bg-black/55"
          aria-label={ariaLabel}
        >
          <span className="flex h-14 w-14 items-center justify-center border border-neon-purple/50 bg-black/90 transition-colors group-hover:border-neon-purple group-hover:bg-neon-purple/10">
            <span className="ml-1 text-lg text-neon-purple">▶</span>
          </span>
          <span className="text-[10px] tracking-[0.25em] text-white/60 group-hover:text-neon-purple">
            {playLabel}
          </span>
        </button>
      ) : null}
    </div>
  );
}
