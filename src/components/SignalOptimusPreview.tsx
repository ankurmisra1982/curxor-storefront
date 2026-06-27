"use client";

import { useRef, useState } from "react";

export function SignalOptimusPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
  }

  return (
    <div className="relative bg-[#030304]">
      <video
        ref={videoRef}
        className="h-auto w-full"
        controls={playing}
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src="/demo/optimus-walkthrough.webm" type="video/webm" />
      </video>

      {!playing ? (
        <button
          type="button"
          onClick={handlePlay}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 transition-colors hover:bg-black/55"
          aria-label="Play humanoid home hub walkthrough"
        >
          <span className="flex h-14 w-14 items-center justify-center border border-neon-purple/50 bg-black/90 shadow-[0_0_24px_rgba(191,90,242,0.2)] transition-colors group-hover:border-neon-purple group-hover:bg-neon-purple/10">
            <span className="ml-1 text-lg text-neon-purple">▶</span>
          </span>
          <span className="text-[10px] tracking-[0.25em] text-white/60 group-hover:text-neon-purple">
            PLAY WALKTHROUGH
          </span>
        </button>
      ) : null}
    </div>
  );
}
