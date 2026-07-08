import {
  apps,
  applianceVersion,
  type StorefrontApp,
} from "@/lib/config";
import {
  clawCheatSheetEntries,
  clawCheatSheetMeta,
  type ClawCheatSheetEntry,
} from "@/lib/generated/claw-cheat-sheet-sync";
import { gtmTierBadgeClass } from "@/lib/claw-gtm-tiers";

function resolveApp(entry: ClawCheatSheetEntry): StorefrontApp | undefined {
  return apps.find((app) => app.applianceId === entry.applianceId);
}

function statusBadge(entry: ClawCheatSheetEntry): string {
  if (entry.status === "live") return clawCheatSheetMeta.statusLabels.live;
  if (entry.scopedKind === "preview") {
    return `${clawCheatSheetMeta.statusLabels.scoped} · ${clawCheatSheetMeta.scopedSublabels.preview}`;
  }
  return `${clawCheatSheetMeta.statusLabels.scoped} · ${clawCheatSheetMeta.scopedSublabels.underConstruction}`;
}

export function ClawCheatSheetSection() {
  const live = clawCheatSheetEntries.filter((entry) => entry.status === "live");
  const scoped = clawCheatSheetEntries.filter((entry) => entry.status === "scoped");

  return (
    <div id="claw-roster" className="mt-16 scroll-mt-24">
      <h2 className="mb-2 text-xs font-bold tracking-[0.3em] text-neon-purple">
        CLAW ROSTER CHEAT SHEET
      </h2>
      <p className="mb-2 max-w-3xl text-xs leading-relaxed text-white/45">
        {clawCheatSheetMeta.summary} CurXor OS {applianceVersion} — synced from appliance
        source.
      </p>
      <p className="mb-8 max-w-3xl text-xs leading-relaxed text-white/55">
        {clawCheatSheetMeta.gtmLead}
      </p>

      <div className="space-y-10">
        <RosterGroup title="Live" entries={live} />
        <RosterGroup title="Scoped" entries={scoped} />
      </div>

      <div className="mt-8 border border-amber-400/20 bg-amber-400/[0.03] p-6">
        <p className="text-[10px] font-bold tracking-[0.2em] text-amber-200/80">
          GTM — DO NOT SAY
        </p>
        <ul className="mt-3 space-y-2">
          {clawCheatSheetMeta.gtmDoNotSay.map((line) => (
            <li key={line} className="flex items-start gap-2 text-xs leading-relaxed text-white/55">
              <span className="mt-1.5 h-1 w-1 shrink-0 bg-amber-300/70" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RosterGroup({
  title,
  entries,
}: {
  title: string;
  entries: readonly ClawCheatSheetEntry[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold tracking-wide text-white/80">{title}</h3>
      <div className="grid gap-4 lg:grid-cols-2">
        {entries.map((entry) => {
          const app = resolveApp(entry);
          const tierClass = app ? gtmTierBadgeClass(app.gtmTier) : "border-white/15 text-white/40";

          return (
            <article key={entry.applianceId} className="border-industrial bg-black p-6">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold tracking-wide">
                    {app?.name ?? entry.applianceId}
                  </h4>
                  <p className="mt-1 font-mono text-[10px] text-white/35">{entry.route}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {app ? (
                    <span
                      className={`border px-2 py-0.5 text-[9px] tracking-[0.15em] ${tierClass}`}
                    >
                      {app.gtmTierLabel.toUpperCase()}
                    </span>
                  ) : null}
                  <span className="text-[9px] tracking-[0.12em] text-white/45">
                    {statusBadge(entry)}
                  </span>
                </div>
              </div>

              <p className="text-xs font-medium text-neon-purple/85">{entry.oneLiner}</p>

              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-xs leading-relaxed text-white/55"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-neon-purple/60" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
