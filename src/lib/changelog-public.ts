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
  /Storefront UX waves|Storefront G1 mirror|Symphony GTM model|Investor press landing|Add release highlights in data\/|forged-app pollution|dev-qa seed|operate rail|03-capital-claw\.png|demo:\/\/local|pillar-\d|tagged v0\./i;

/** Rewrite known ops phrases → outsider English. */
function publicizeHighlight(raw: string): string | null {
  if (DROP.test(raw)) return null;

  let h = raw
    // Milestone / ticket codes in parens
    .replace(/\s*\((?:FC|SS|GK|FN|BP|G|W|F|C)\d+(?:[–-](?:FC|SS|GK|FN|BP|G|W|F|C)?\d+)?(?:,\s*(?:FC|SS|GK|FN|BP|G|W|F|C)\d+)*\)/gi, "")
    .replace(/\bG2 depth wave\b/gi, "Depth release")
    .replace(/\bG1 golden path closed\b/gi, "First full end-to-end run on the box")
    .replace(/\bgolden path closed\b/gi, "first full end-to-end run on the box")
    .replace(/\bgolden[- ]path\b/gi, "end-to-end")
    .replace(/\bG1-era\b/gi, "")
    .replace(/\buntil G4\+?\b/gi, "until deeper tutor depth ships")
    .replace(/\bqa:local\b/gi, "appliance QA")
    .replace(/\blocal QA\b/gi, "appliance QA")
    .replace(/\bbox-smoke\b/gi, "on-box verification")
    .replace(/\bon-box smoke\b/gi, "on-box verification")
    .replace(/\bdogfood\b/gi, "proven")
    .replace(/\bverify-unbox-day\.sh(?:\s+--post-models)?\b/gi, "unbox verification")
    .replace(/\bunbox verification PASS\b/gi, "unbox verification passed")
    .replace(/\bsmile test PASS\b/gi, "operator walkthrough passed")
    .replace(/\bsmile test\b/gi, "operator walkthrough")
    .replace(/\bproduction OTA is G2\b/gi, "production customer-fleet OTA still pending")
    .replace(/\bEXIT-DEMO guide\b/gi, "practice-mode exit guide")
    .replace(/\bexit-demo guide\b/gi, "practice-mode exit guide")
    .replace(/\bexit-demo checks\b/gi, "practice-mode exit checks")
    .replace(/\bexit-demo scaffold\b/gi, "practice-mode exit checks")
    .replace(/\bexit-demo CTA\b/gi, "practice-mode exit CTA")
    .replace(/\bGo Live exit-demo\b/gi, "Go Live practice-mode exit")
    .replace(/\bverify:exit-demo-scaffold\b/gi, "practice-mode exit checks")
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
    .replace(/\bFRE\s*\(\s*Capital,\s*Creator,\s*(?:Work|Outreach)\s*\)/gi, "flagship desks (Capital, Creator, Outreach)")
    // "Work" was the pre-launch name for the Outreach desk — never ship it to buyers.
    .replace(/\bCapital,\s*Creator,\s*(?:and\s*)?Work\b/gi, "Capital, Creator, and Outreach")
    .replace(/\bCapital,\s*Work,\s*and\s*Creator\b/gi, "Capital, Creator, and Outreach")
    .replace(/\bWork\s*\/\s*Outreach\b/gi, "Outreach")
    .replace(/\bwork-checklist\b/gi, "Outreach checklist")
    .replace(
      /\bCrew Cafe rebrand sign-off\b[^.—]*/gi,
      "Crew Cafe naming polish for operator UI",
    )
    .replace(/\brebrand sign-off\b/gi, "naming polish")
    .replace(/\bWork (pipeline|desk|workspace)\b/g, "Outreach $1")
    .replace(/\bDepth wave\b/gi, "Depth release")
    .replace(/\bon FRE mesh\b/gi, "on the mesh")
    .replace(/\bFRE\b/g, "desk setup")
    .replace(/\bSkillSpector(?:\s+CI gate)?\b/gi, "import safety gate")
    .replace(/\bOOTB crewmates\b/gi, "included crewmates")
    .replace(/\bOOTB\b/g, "day-one")
    .replace(/\bsynced to CCP\b/gi, "synced to crew context")
    .replace(/\bCCP\b/g, "crew context")
    .replace(/\bL4-capital\b/gi, "Capital")
    .replace(/\blocked copy per REBRAND-DECISION\b/gi, "desk-crew naming finalized")
    .replace(/\blocked copy per desk-crew naming\b/gi, "desk-crew naming finalized")
    .replace(/\bREBRAND-DECISION\b/gi, "desk-crew naming")
    .replace(/\bcopy lock\b/gi, "naming finalized")
    .replace(/\blocked copy\b/gi, "finalized naming")
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
    .replace(/\bcrm_status\b/gi, "CRM status")
    .replace(/\b\d+\+?\s*smoke(?:\s+checks)?\b/gi, "appliance QA checks")
    .replace(/\b10\.77\.0\.1(?::\d+(?:[–-]\d+)?)?/g, "local mesh")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+—\s+—/g, " —")
    .replace(/\s+·\s+·/g, " ·")
    .replace(/^\s*[—·]\s*/, "")
    .replace(/\s*[—·]\s*$/, "")
    .trim();

  // Second pass — leftover exit-demo / FRE fragments
  h = h
    .replace(/\bexit-demo\b/gi, "practice mode")
    .replace(/\bFRE\b/g, "desk setup")
    .replace(/\s{2,}/g, " ")
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
      .filter((line): line is string => Boolean(line)),
  }),
);
