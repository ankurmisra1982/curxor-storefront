"use client";

import { useEffect, useRef, useState } from "react";

/** Dead lead: white screen + loading — skip into the walkthrough. */
const START_AT_SEC = 28;
/** Post-intro UI moves too fast at 1× — slow the useful cut. */
const PLAYBACK_RATE = 0.6;

export function SignalOptimusPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  /** Once true, keep native controls — scrubbing pauses briefly and must not re-cover the player. */
  const [started, setStarted] = useState(false);

  function applyPlaybackWindow(video: HTMLVideoElement) {
    if (video.currentTime < START_AT_SEC) {
      video.currentTime = START_AT_SEC;
    }
    if (video.playbackRate !== PLAYBACK_RATE) {
      video.playbackRate = PLAYBACK_RATE;
    }
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      applyPlaybackWindow(video);
    };

    const onSeeking = () => {
      // Block scrubbing back into the dead intro.
      if (video.currentTime < START_AT_SEC) {
        video.currentTime = START_AT_SEC;
      }
    };

    const onRateChange = () => {
      // Some browsers reset rate on seek — pin it.
      if (video.playbackRate !== PLAYBACK_RATE) {
        video.playbackRate = PLAYBACK_RATE;
      }
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("seeking", onSeeking);
    video.addEventListener("ratechange", onRateChange);

    if (video.readyState >= 1) onLoaded();

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("ratechange", onRateChange);
    };
  }, []);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    applyPlaybackWindow(video);
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
        onPlay={() => {
          const video = videoRef.current;
          if (video) applyPlaybackWindow(video);
          setStarted(true);
        }}
      >
        <source src="/demo/optimus-walkthrough.webm" type="video/webm" />
      </video>

      {!started ? (
        <button
          type="button"
          onClick={handlePlay}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 transition-colors hover:bg-black/55"
          aria-label="Play humanoid home hub walkthrough"
        >
          <span className="flex h-14 w-14 items-center justify-center border border-neon-purple/50 bg-black/90 transition-colors group-hover:border-neon-purple group-hover:bg-neon-purple/10">
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
