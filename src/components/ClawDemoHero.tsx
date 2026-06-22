import Image from "next/image";

export type ClawDemoHeroProps = {
  src: string;
  alt: string;
  caption: string;
  label?: string;
};

export function ClawDemoHero({ src, alt, caption, label = "FLIGHT COMMAND" }: ClawDemoHeroProps) {
  return (
    <figure className="border border-white/10 bg-black">
      <div className="overflow-hidden border-b border-white/10">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          className="h-auto w-full"
          priority
        />
      </div>
      <figcaption className="px-4 py-3 text-xs leading-relaxed text-white/45">
        <span className="text-[10px] tracking-[0.2em] text-neon-purple">
          {label} · LIVE CAPTURE
        </span>
        <p className="mt-2">{caption}</p>
      </figcaption>
    </figure>
  );
}
