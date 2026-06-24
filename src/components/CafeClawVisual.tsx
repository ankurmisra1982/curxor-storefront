const PIXEL_TILES = [
  { label: "CAP", color: "border-emerald-400/40 bg-emerald-500/10", active: true },
  { label: "CRE", color: "border-neon-purple/40 bg-neon-purple/10", active: true },
  { label: "OUT", color: "border-sky-400/40 bg-sky-500/10", active: false },
  { label: "FOR", color: "border-amber-400/40 bg-amber-500/10", active: true },
  { label: "CAF", color: "border-amber-300/60 bg-amber-400/20", active: true, featured: true },
  { label: "SIG", color: "border-white/15 bg-white/[0.03]", active: false },
  { label: "VIT", color: "border-rose-400/30 bg-rose-500/10", active: false },
  { label: "KIN", color: "border-violet-400/30 bg-violet-500/10", active: false },
  { label: "YOU", color: "border-cyan-400/50 bg-cyan-500/15", active: true, player: true },
] as const;

const ASCENSION_EVENTS = [
  { claw: "Capital", event: "Rule fired · +120 XP", time: "2m" },
  { claw: "Creator", event: "Published · +85 XP", time: "14m" },
  { claw: "Outreach", event: "Sequence sent · +60 XP", time: "1h" },
] as const;

function PixelRoomPanel() {
  return (
    <figure className="border border-white/10 bg-black p-2">
      <div className="relative aspect-[16/10] overflow-hidden border border-white/5 bg-[#050508]">
        <div className="absolute inset-0 grid-industrial opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.06] via-transparent to-neon-purple/[0.08]" />

        <div className="relative flex h-full flex-col p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.25em] text-amber-200/70">PIXEL ROOM</span>
            <span className="flex items-center gap-1.5 text-[9px] tracking-widest text-white/35">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              LIVE ON METAL
            </span>
          </div>

          <div className="mt-4 grid flex-1 grid-cols-3 gap-2 sm:gap-2.5">
            {PIXEL_TILES.map((tile) => (
              <div
                key={tile.label}
                className={`relative flex flex-col items-center justify-center border p-2 transition-colors ${tile.color} ${
                  tile.featured ? "shadow-[inset_0_0_24px_rgba(251,191,36,0.12)]" : ""
                }`}
              >
                {tile.active ? (
                  <div
                    className={`mb-1.5 h-5 w-5 border ${
                      tile.player
                        ? "border-cyan-300/60 bg-cyan-400/20 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                        : tile.featured
                          ? "border-amber-300/70 bg-amber-400/25 shadow-[0_0_14px_rgba(251,191,36,0.4)]"
                          : "border-white/25 bg-white/10"
                    }`}
                  />
                ) : (
                  <div className="mb-1.5 h-5 w-5 border border-dashed border-white/10" />
                )}
                <span
                  className={`text-[8px] tracking-[0.2em] ${
                    tile.featured ? "text-amber-200/90" : tile.player ? "text-cyan-200/80" : "text-white/40"
                  }`}
                >
                  {tile.label}
                </span>
                {tile.active && !tile.player ? (
                  <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-white/50" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] tracking-widest text-white/30">
            <span>3 PATRONS ACTIVE</span>
            <span className="text-amber-200/60">STREAK · 7D</span>
          </div>
        </div>
      </div>
      <figcaption className="px-1 pt-2 text-[10px] tracking-[0.2em] text-white/35">
        PIXEL ROOM
      </figcaption>
    </figure>
  );
}

function AscensionPanel() {
  const xp = 3326;
  const level = 12;
  const progress = 68;

  return (
    <figure className="border border-white/10 bg-black p-2">
      <div className="relative aspect-[16/10] overflow-hidden border border-white/5 bg-[#050508]">
        <div className="absolute inset-0 grid-industrial opacity-40" />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-neon-purple/10 blur-3xl" />
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />

        <div className="relative flex h-full flex-col p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.25em] text-neon-purple/80">ASCENSION</span>
            <span className="border border-amber-400/25 px-2 py-0.5 text-[9px] tracking-widest text-amber-200/70">
              LVL {level}
            </span>
          </div>

          <div className="mt-5">
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold tracking-tight text-white/90 sm:text-3xl">
                {xp.toLocaleString()}
              </p>
              <p className="text-[9px] tracking-widest text-white/35">ASCENSION XP</p>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden border border-white/10 bg-black/60">
              <div
                className="h-full bg-gradient-to-r from-amber-400/80 via-neon-purple to-neon-purple/60 shadow-[0_0_12px_rgba(191,90,242,0.45)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1.5 text-[9px] tracking-widest text-white/30">
              {progress}% TO LVL {level + 1} · CROSS-CLAW MOMENTUM
            </p>
          </div>

          <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
            <p className="text-[9px] tracking-[0.2em] text-white/35">RECENT ACTIVITY</p>
            {ASCENSION_EVENTS.map((item) => (
              <div
                key={`${item.claw}-${item.time}`}
                className="flex items-center justify-between gap-3 border border-white/[0.06] bg-white/[0.02] px-2.5 py-2"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-medium tracking-wide text-white/70">{item.claw}</p>
                  <p className="truncate text-[9px] text-white/35">{item.event}</p>
                </div>
                <span className="shrink-0 text-[9px] tracking-widest text-white/25">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="px-1 pt-2 text-[10px] tracking-[0.2em] text-white/35">
        ASCENSION
      </figcaption>
    </figure>
  );
}

export function CafeClawVisual() {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      <PixelRoomPanel />
      <AscensionPanel />
    </div>
  );
}
