type DeskStripVideoProps = {
  src: string;
  title: string;
  honestyLabel: string;
  poster?: string;
};

export function DeskStripVideo({ src, title, honestyLabel, poster }: DeskStripVideoProps) {
  return (
    <figure className="border border-white/10 bg-black">
      <div className="overflow-hidden border-b border-white/10">
        <video
          className="h-auto w-full"
          controls
          playsInline
          preload="none"
          poster={poster}
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <figcaption className="px-4 py-3 text-xs leading-relaxed text-white/55">
        <span className="text-[10px] tracking-[0.2em] text-neon-purple">
          DESK STRIP · ~30s · SOUND ON
        </span>
        <p className="mt-2 font-medium text-white/75">{title}</p>
        <p className="mt-1">{honestyLabel}</p>
      </figcaption>
    </figure>
  );
}
