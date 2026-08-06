import {
  apps,
  applianceVersion,
  type StorefrontApp,
} from "@/lib/config";
import { gtmTierBadgeClass } from "@/lib/claw-gtm-tiers";
import {
  getPublicRosterEntries,
  publicRosterLead,
  publicRosterSummary,
  type PublicRosterEntry,
} from "@/lib/public-roster";

function resolveApp(entry: PublicRosterEntry): StorefrontApp | undefined {
  return apps.find((app) => app.applianceId === entry.applianceId);
}

export function ClawCheatSheetSection() {
  const entries = getPublicRosterEntries();
  const live = entries.filter((entry) => entry.status === "live");
  const preview = entries.filter((entry) => entry.status === "preview");

  return (
    <div id="desk-crew-roster" className="relative mt-16 scroll-mt-24">
      {/* LEGACY bookmark — old /architecture#claw-roster links */}
      <span id="claw-roster" className="absolute -top-24" aria-hidden="true" />
      <h2 className="mb-2 text-xs font-bold tracking-[0.3em] text-neon-purple">
        DESK CREW ROSTER
      </h2>
      <p className="mb-2 max-w-3xl text-xs leading-relaxed text-white/55">
        {publicRosterSummary} CurXor OS {applianceVersion}.
      </p>
      <p className="mb-8 max-w-3xl text-xs leading-relaxed text-white/55">
        {publicRosterLead}
      </p>

      <div className="space-y-10">
        <RosterGroup title="Live" entries={live} />
        <RosterGroup title="Preview" entries={preview} />
      </div>
    </div>
  );
}

function RosterGroup({
  title,
  entries,
}: {
  title: string;
  entries: readonly PublicRosterEntry[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold tracking-wide text-white/80">{title}</h3>
      <div className="grid gap-4 lg:grid-cols-2">
        {entries.map((entry) => {
          const app = resolveApp(entry);
          const tierClass = app ? gtmTierBadgeClass(app.gtmTier) : "border-white/15 text-white/55";

          return (
            <article key={entry.applianceId} className="surface p-6">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold tracking-wide">
                    {app?.name ?? entry.applianceId}
                  </h4>
                  <p className="mt-1 font-mono text-[10px] text-white/55">{entry.route}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {app ? (
                    <span
                      className={`border px-2 py-0.5 text-[9px] tracking-[0.15em] ${tierClass}`}
                    >
                      {app.gtmTierLabel.toUpperCase()}
                    </span>
                  ) : null}
                  <span className="text-[9px] tracking-[0.12em] text-white/55">
                    {entry.statusLabel}
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
