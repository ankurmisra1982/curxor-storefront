import { capitalWalkthrough } from "@/lib/capital-page";

export function CapitalWalkthroughVideo() {
  return (
    <figure className="border border-white/10 bg-black">
      <video
        className="aspect-video w-full bg-black"
        controls
        playsInline
        preload="metadata"
        poster={capitalWalkthrough.poster}
        aria-label="Capital Claw Flight Command walkthrough"
      >
        <source src={capitalWalkthrough.src} type="video/webm" />
        Your browser does not support embedded video. Open{" "}
        {capitalWalkthrough.src} directly.
      </video>
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-white/45">
        <span className="text-[10px] tracking-[0.2em] text-neon-purple">
          {capitalWalkthrough.durationLabel.toUpperCase()} · FLIGHT COMMAND
        </span>
        <p className="mt-2">{capitalWalkthrough.caption}</p>
      </figcaption>
    </figure>
  );
}
