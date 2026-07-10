---
name: offline-tasks
description: >-
  Run a storefront offline checkup when Ankur types "offline tasks" (or
  similar). Audit pending work, sync/clean if needed, then report status and
  action items in chat. Do not create a scheduled Cursor Automation.
disable-model-invocation: false
---

# Offline tasks — storefront checkup

Trigger phrases: **offline tasks**, **offline task**, **checkup**, **status readout**.

This is an **on-demand agent workflow**, not a scheduled automation. Put the full report **in this chat**. Do not open the Automations editor unless he explicitly asks for a schedule.

## Goal

1. See what is pending (GTM, docs, sync, deploy).
2. Clean up and sync if needed (safe, reversible ops only).
3. Report status + **action items for Ankur** (CEO decisions / things only he can unblock).

## Procedure

### 1. Snapshot

Run in parallel:

- `git status` / `git diff --stat` / `git log -8 --oneline` / `git branch -vv`
- Confirm `../curxor-os` exists; read `../curxor-os/version.json`
- Read `src/lib/generated/appliance-sync.ts` (`applianceVersion`, `applianceSyncedAt`)
- Skim `docs/CTO-STATUS-REPORT.md` (headline + P1 stack) and open items in `docs/GTM-CHECKLIST.md`

### 2. Sync / clean (only if needed)

- If appliance version ≠ storefront generated version, or sibling repo present and sync looks stale: run `npm run sync:appliance` (and `sync:changelog` / `sync:brand` if scripts imply it).
- Do **not** commit unless he asks.
- Do **not** push unless he asks.
- Do **not** invent copy or ship Wave builds in this pass — checkup only.
- If working tree has unrelated dirty files, list them; do not mass-revert.

### 3. Live / ops (best effort)

- If Vercel CLI or Vercel MCP is available: recent prod deploy health for curxor-storefront.
- Note Resend / subscribe / UAT status from GTM checklist — do not re-smoke unless he asks.

### 4. Report format (chat only)

Keep it scannable. Brutally honest. No fluff.

```markdown
## Offline checkup — YYYY-MM-DD

### Shipped / live
- …

### Repo hygiene
- Branch · dirty? · sync version match? · last sync time

### Pending (honest)
- Storefront-owned (can build when he says go)
- Blocked on appliance / hardware (G4+)
- Parked post-fundraise (do not build)

### Experience risks
- Oversell / doc drift / broken journey — or "none material"

### Action items for you
1. … (CEO decision or unblock only)
2. …
3. …

### Next (CDO lens)
- 1–3 prioritized moves — flag if CEO decision needed
```

## Guardrails

- Vision room rules still apply: no build unless he says execute.
- Do not claim mesh latency, fleet OTA, or Cafe Wave A as MS-S1 verified.
- LinkedIn brochure flip stays hold until batch product photography.
- Primary CTA remains subscribe / waitlist; category-first hero spine.
