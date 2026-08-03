import Image from "next/image";

const CAFE_STILLS = [
  {
    src: "/demo/cafe/18-ascension-tab.png",
    alt: "Crew Cafe ascension tab — XP and streaks on CurXor OS",
    label: "ASCENSION",
    caption: "Crew Cafe ascension · captured on MS-S1",
  },
  {
    src: "/demo/cafe/19-pixel-room.png",
    alt: "Crew Cafe pixel room — ensemble presence on CurXor OS",
    label: "PIXEL ROOM",
    caption: "Crew Cafe pixel room · captured on MS-S1",
  },
] as const;

/** Real Crew Cafe stills from MS-S1 — not CSS stubs. */
export function CafeClawVisual() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {CAFE_STILLS.map((shot) => (
        <figure key={shot.src} className="border border-white/10 bg-black">
          <div className="overflow-hidden border-b border-white/10">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1280}
              height={800}
              className="h-auto w-full"
            />
          </div>
          <figcaption className="px-3 py-2.5 text-xs leading-relaxed text-white/45">
            <span className="text-[10px] tracking-[0.2em] text-amber-200/70">
              {shot.label}
            </span>
            <p className="mt-1.5">{shot.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
