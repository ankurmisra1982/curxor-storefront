import { creatorWalkthrough } from "@/lib/creator-page";

export function CreatorWalkthroughVideo() {
  return (
    <figure className="border border-white/10 bg-black">
      <video
        className="aspect-video w-full bg-black"
        controls
        playsInline
        preload="metadata"
        poster={creatorWalkthrough.poster}
        aria-label="Creator Claw Flight Command walkthrough"
      >
        <source src={creatorWalkthrough.src} type="video/webm" />
        Your browser does not support embedded video. Open{" "}
        {creatorWalkthrough.src} directly.
      </video>
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-white/45">
        <span className="text-[10px] tracking-[0.2em] text-neon-purple">
          {creatorWalkthrough.durationLabel.toUpperCase()} · FLIGHT COMMAND
        </span>
        <p className="mt-2">{creatorWalkthrough.caption}</p>
      </figcaption>
    </figure>
  );
}
