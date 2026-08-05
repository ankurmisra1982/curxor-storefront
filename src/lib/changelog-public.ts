/**
 * Public changelog layer — appliance sync keeps ticket codes; buyers get outcomes.
 */

import { changelogEntries, changelogMeta } from "@/lib/generated/changelog-sync";

export type PublicChangelogEntry = {
  version: string;
  date: string;
  channel: string;
  highlights: string[];
};

/** Drop pure storefront/ops theater lines. */
const DROP =
  /Storefront UX waves|Storefront G1 mirror|Symphony GTM model|Investor press landing|Add release highlights in data\//i;

/** Rewrite known ops phrases → outsider English. */
function publicizeHighlight(raw: string): string | null {
  if (DROP.test(raw)) return null;

  let h = raw
    // Milestone / ticket codes in parens or as prefixes
    .replace(/\s*\((?:FC|SS|GK|FN|BP|G|W|F|C)\d+(?:[–-](?:FC|SS|GK|FN|BP|G|W|F|C)?\d+)?(?:,\s*(?:FC|SS|GK|FN|BP|G|W|F|C)\d+)*\)/gi, "")
    .replace(/\bG2 depth wave\b/gi, "Depth release")
    .replace(/\bG1 golden path closed\b/gi, "Golden path closed")
    .replace(/\bG1-era\b/gi, "")
    .replace(/\buntil G4\+?\b/gi, "until deeper tutor depth ships")
    .replace(/\bqa:local\b/gi, "local QA")
    .replace(/\bbox-smoke\b/gi, "on-box smoke")
    .replace(/\bdogfood\b/gi, "proven")
    .replace(/\bverify-unbox-day\.sh(?:\s+--post-models)?\b/gi, "unbox verification")
    .replace(/\bsmile test PASS\b/gi, "operator walkthrough passed")
    .replace(/\bsmile test\b/gi, "operator walkthrough")
    .replace(/\bproduction OTA is G2\b/gi, "production customer-fleet OTA still pending")
    .replace(/\bEXIT-DEMO guide\b/gi, "exit-demo guide")
    .replace(/\bverify:exit-demo-scaffold\b/gi, "exit-demo checks")
    .replace(/\bdemo:capture:\w+\b/gi, "desk capture")
    .replace(/\brun_demo_tour\b/gi, "demo tour")
    .replace(/\bdemoReady\b/gi, "demo-ready")
    .replace(/\bdigital\.env(?:\.example)?\b/gi, "egress config")
    .replace(/\bTier A\/B polish\b/gi, "Workspace polish")
    .replace(/\bOutreach Tier B\b/gi, "Outreach depth")
    .replace(/\bTier B\b/gi, "Shipped depth")
    .replace(/\bGTM F\d+\b/gi, "Forge QA")
    .replace(/\bGTM refresh\b/gi, "Demo capture refresh")
    .replace(/\bCrew Cafe C\d+\b/gi, "Crew Cafe")
    .replace(/\bCafe \+ CCP F\d+\b/gi, "Cafe + family context")
    .replace(/\bFleet lifecycle F\d+\b/gi, "Fleet lifecycle")
    .replace(/\bOutreach Professional Workstation W\d+(?:[–-]W\d+)?\b/gi, "Outreach workstation")
    .replace(/\bBeginner FRE nudge\b/gi, "Beginner setup nudge")
    .replace(/\bFRE mesh opt-in\b/gi, "mesh opt-in")
    .replace(/\bFRE-configurable\b/gi, "operator-configurable")
    .replace(/\bFRE \(Capital, Creator, Work\)\b/gi, "flagship desks (Capital, Creator, Work)")
    .replace(/\bon FRE mesh\b/gi, "on the mesh")
    .replace(/\bL4-capital\b/gi, "Capital")
    .replace(/\bREBRAND-DECISION\b/gi, "desk-crew naming")
    .replace(/\bFEATURE-FUNCTION\b/gi, "feature modes")
    .replace(/\bSTARTUP-GUIDE\b/gi, "startup guide")
    .replace(/\bpublishForgedDeskContext\b/gi, "forged-desk context publish")
    .replace(/\bexecuteMyCapitalSkill\b/gi, "Capital skill execution")
    .replace(/\bdashboard_bootstrap\b/gi, "workspace bootstrap")
    .replace(/\bloadBootstrap\b/gi, "workspace bootstrap")
    .replace(/\bprocess_due\b/gi, "scheduled send processing")
    .replace(/\barm_rule\b/gi, "arm rule")
    .replace(/\bcreate_rule\b/gi, "create rule")
    .replace(/\bexecute_now\b/gi, "execute now")
    .replace(/\bpublish_now\b/gi, "publish now")
    .replace(/\bevaluate_rules\b/gi, "evaluate rules")
    .replace(/\bgo_live\b/gi, "Go Live")
    .replace(/\bpaperReady\b/gi, "paper-ready")
    .replace(/\bcapital-queue\.json\b/gi, "per-desk capital queue")
    .replace(/\b10\.77\.0\.1(?::\d+(?:[–-]\d+)?)?/g, "local mesh")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+—\s+—/g, " —")
    .replace(/\s+·\s+·/g, " ·")
    .replace(/^\s*[—·]\s*/, "")
    .replace(/\s*[—·]\s*$/, "")
    .trim();

  if (!h || h.length < 12) return null;
  return h;
}

export { changelogMeta };

export const publicChangelogEntries: PublicChangelogEntry[] = changelogEntries.map(
  (entry) => ({
    version: entry.version,
    date: entry.date,
    channel: entry.channel,
    highlights: entry.highlights
      .map(publicizeHighlight)
      .filter((h): h is string => Boolean(h)),
  }),
);
