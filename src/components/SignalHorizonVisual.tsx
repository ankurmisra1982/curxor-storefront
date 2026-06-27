"use client";

import { signalHorizonCopy } from "@/lib/signal-page";

const DRIFT_DEVICES = [
  { id: "pin", label: "PIN", x: "12%", y: "18%", delay: "0s", duration: "14s" },
  { id: "glasses", label: "GLANCE", x: "68%", y: "12%", delay: "-3s", duration: "16s" },
  { id: "vr", label: "VR", x: "38%", y: "8%", delay: "-6s", duration: "18s" },
  { id: "robot", label: "ROBOT", x: "82%", y: "28%", delay: "-2s", duration: "15s" },
  { id: "pod", label: "FLEET", x: "22%", y: "32%", delay: "-8s", duration: "17s" },
  { id: "orb", label: "ROOM", x: "55%", y: "26%", delay: "-5s", duration: "19s" },
] as const;

function DeviceSilhouette({ id }: { id: (typeof DRIFT_DEVICES)[number]["id"] }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 1.2, opacity: 0.9 };

  switch (id) {
    case "pin":
      return (
        <g {...common}>
          <circle cx="20" cy="14" r="6" />
          <rect x="16" y="20" width="8" height="10" rx="1" />
        </g>
      );
    case "glasses":
      return (
        <g {...common}>
          <circle cx="14" cy="18" r="5" />
          <circle cx="26" cy="18" r="5" />
          <path d="M19 18h2" />
          <path d="M9 16 L14 18 M31 16 L26 18" />
        </g>
      );
    case "vr":
      return (
        <g {...common}>
          <path d="M8 22 Q20 10 32 22 Q20 28 8 22Z" />
          <path d="M12 22 L28 22" strokeDasharray="2 2" />
        </g>
      );
    case "robot":
      return (
        <g {...common}>
          <rect x="14" y="8" width="12" height="10" rx="2" />
          <path d="M12 18 L20 24 L28 18" />
          <path d="M16 24 L16 30 M24 24 L24 30" />
        </g>
      );
    case "pod":
      return (
        <g {...common}>
          <rect x="10" y="16" width="20" height="10" rx="5" />
          <circle cx="14" cy="28" r="2" />
          <circle cx="26" cy="28" r="2" />
        </g>
      );
    case "orb":
      return (
        <g {...common}>
          <circle cx="20" cy="20" r="8" strokeDasharray="3 2" />
          <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" opacity={0.4} />
        </g>
      );
    default:
      return null;
  }
}

export function SignalHorizonVisual({
  compact = false,
  showVoidQuestion = true,
}: {
  compact?: boolean;
  showVoidQuestion?: boolean;
}) {
  return (
    <figure className="border border-white/10 bg-black">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#030304]">
        <div className="absolute inset-0 grid-industrial opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

        {/* Drift field */}
        <div className="absolute inset-0" aria-hidden>
          {DRIFT_DEVICES.map((device) => (
            <div
              key={device.id}
              className="signal-drift absolute text-white/55 motion-reduce:opacity-70 sm:text-white/60"
              style={{
                left: device.x,
                top: device.y,
                animationDelay: device.delay,
                animationDuration: device.duration,
              }}
            >
              <svg viewBox="0 0 40 36" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
                <DeviceSilhouette id={device.id} />
              </svg>
              <span className="mt-1 block text-center text-[7px] tracking-[0.25em] text-white/50">
                {device.label}
              </span>
            </div>
          ))}
        </div>

        {/* Void question — omit on /signal where H1 already asks it */}
        {showVoidQuestion ? (
          <div className="pointer-events-none absolute left-0 right-0 top-[38%] text-center">
            <p className="text-[9px] tracking-[0.35em] text-white/20 sm:text-[10px]">
              WHAT IS THE NEXT INTERFACE?
            </p>
          </div>
        ) : null}

        {/* Desk + orchestrator */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-16 sm:px-8 sm:pb-6">
          <div className="relative mx-auto max-w-lg">
            {/* Cables */}
            <svg
              className="pointer-events-none absolute -top-8 left-0 right-0 h-10 w-full overflow-visible"
              viewBox="0 0 400 40"
              aria-hidden
            >
              <path
                d="M80 38 C80 8 120 8 160 20"
                fill="none"
                stroke="#BF5AF2"
                strokeWidth="1.5"
                strokeOpacity="0.35"
              />
              <path
                d="M320 38 C320 8 280 8 240 20"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="1.5"
                strokeOpacity="0.35"
              />
              <circle className="signal-pulse-purple" cx="160" cy="20" r="3" fill="#BF5AF2" />
              <circle className="signal-pulse-amber" cx="240" cy="20" r="3" fill="#fbbf24" />
            </svg>

            <div className="relative border border-white/15 bg-black/80 p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                <span className="text-[9px] tracking-[0.25em] text-neon-purple">
                  CURXOR OS · ORCHESTRATOR
                </span>
                <span className="text-[8px] tracking-widest text-white/30">ON YOUR DESK</span>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="space-y-1 text-right">
                  <p className="text-[8px] tracking-[0.2em] text-neon-purple/80">ENO1 · COMMAND</p>
                  <p className="text-[8px] text-white/35">Telegram · Slack · Flight Command</p>
                </div>

                <div className="relative flex h-14 w-24 flex-col items-center justify-center border border-neon-purple/40 bg-[#080808] shadow-[0_0_24px_rgba(191,90,242,0.15)] sm:h-16 sm:w-28">
                  <div className="absolute inset-x-2 top-2 h-0.5 bg-neon-purple/60" />
                  <span className="text-[8px] font-bold tracking-[0.2em] text-white/70">NEXUS</span>
                  <span className="mt-1 text-[7px] tracking-widest text-neon-purple/70">SIGNAL CLAW</span>
                  <div className="absolute bottom-2 flex gap-1">
                    <span className="h-1 w-1 rounded-full bg-neon-purple shadow-[0_0_6px_#BF5AF2]" />
                    <span className="h-1 w-1 rounded-full bg-amber-400/80" />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[8px] tracking-[0.2em] text-amber-200/80">ENO2 · EGRESS</p>
                  <p className="text-[8px] text-white/35">Capital · Creator · Outreach</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-2 border-t border-white/10 pt-2">
                {["CAPITAL", "CREATOR", "OUTREACH", "KIN", "VITAL"].map((chip) => (
                  <span
                    key={chip}
                    className="border border-white/10 px-1.5 py-0.5 text-[7px] tracking-widest text-white/30"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {compact ? (
        <figcaption className="px-4 py-2">
          <p className="text-[10px] italic tracking-wide text-white/25">
            {signalHorizonCopy.conceptLabel}
          </p>
        </figcaption>
      ) : (
        <figcaption className="space-y-2 px-4 py-3">
          <p className="text-[10px] tracking-[0.25em] text-neon-purple">{signalHorizonCopy.eyebrow}</p>
          <p className="text-sm font-medium text-white/80">{signalHorizonCopy.headline}</p>
          <p className="text-xs leading-relaxed text-white/45">{signalHorizonCopy.subhead}</p>
          <p className="text-[10px] italic tracking-wide text-white/25">{signalHorizonCopy.conceptLabel}</p>
        </figcaption>
      )}
    </figure>
  );
}
