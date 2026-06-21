# GTM Checklist — Storefront vs Appliance

MS-S1 MAX in transit — use this to prioritize GTM work in **this repo**.

## Done in **curxor storefront** ✅

- [x] Landing page hero (*Mint AI Employees on Bare Metal.*)
- [x] Spec sheet matrix (Compute / Network / Claw Engine)
- [x] Ten Claw workspaces (9 verticals + The Forge) grouped by category + mobile carousel
- [x] Day One hub section (Home / chat / stay local / Settings)
- [x] 3D hardware scene (R3F) with perf deferrals
- [x] Email capture (`/api/subscribe` + Resend)
- [x] Stripe pre-order CTA + mobile sticky CTA
- [x] X / Twitter link (`@curxorai`)
- [x] Industrial brand (black, neon purple, monospace)
- [x] FAQ + JSON-LD + llms.txt + sitemap + robots
- [x] Investor pitch deck — [PITCH-DECK.md](PITCH-DECK.md) + branded [PowerPoint](CurXor-Pitch-Deck-Speaker-Notes.pptx) (`npm run export:pitch-deck`)
- [x] Architecture page (`/architecture`) — four pillars + eno1/eno2
- [x] Privacy policy (`/privacy`) + terms & trading disclaimer (`/terms`)
- [x] Changelog (`/changelog`) tied to `../curxor-os/version.json` via sync
- [x] Press kit (`/press`) — boilerplate + fact sheet
- [x] Claw taglines synced from `app-agent-catalog.ts` when sibling repo present

## Before marketing (one-time ops)

- [ ] **Resend on Vercel** — verify `curxor.ai` in Resend → create Segment → set `RESEND_API_KEY`, `RESEND_SEGMENT_ID`, `RESEND_FROM_EMAIL` on Vercel Production → redeploy → test `POST /api/subscribe` returns `{"ok":true}`

## Build next (this repo)

- [x] Settings / user freedom copy (Claws toggle, optional frontier LLM, themes) — `src/lib/config.ts`
- [x] Pricing / UMA tiers page (`/pricing`) — synced from `local-llm-catalog.ts`
- [x] Demo screenshots in `public/demo/` (Home, Settings, Capital, Forge, Vital, Kin, unified inbox)
- [x] Changelog auto-append on version bump (`sync:appliance` + `data/changelog-entries.json`)
- [x] Pricing compute ladder on `/pricing`
- [x] MIKY / agent NAS FAQ + comparison row
- [x] v0.2.0 marketing pass — messaging FAQ, architecture, agnostic wearables copy
- [ ] Product photography in hero when MS-S1 batch is photographed

## Wait for **curxor-os + hardware**

- [ ] ROCm / UMA / mesh benchmarks (publish validated latency numbers)
- [x] MS-S1 MAX validation badge (soft pre-hardware state — hero + `/architecture#validation`)
- [ ] Factory USB / cloud-init install video
- [ ] PDF operator guide (`../curxor-os/docs/scripts/export-guides-pdf.sh`)
- [ ] Live demo unit (Engage Claw + captive portal)
- [ ] Production OTA release URL
- [ ] Customer case study

## Sync points

| When this changes… | Update here… |
|--------------------|--------------|
| `../curxor-os/version.json` | Run `npm run sync:appliance` → badges, changelog meta |
| `../curxor-os/release-notes.json` | Highlights for new versions (auto-appended to changelog) |
| `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` | `npm run sync:appliance` → names/descriptions |
| `../curxor-os/pillar-4-dashboard/lib/app-agent-catalog.ts` | `npm run sync:appliance` → taglines |
| `../curxor-os/docs/guides/13-universal-ui-design.md` | Settings tab copy, FAQ frontier LLM answers |
| `../curxor-os/pillar-4-dashboard/lib/local-llm-catalog.ts` | Future UMA tiers page |

## Copy guardrails

| Claim | Status |
|-------|--------|
| "Sub-millisecond ZeroMQ telemetry" | **Removed** — use "low-latency local mesh; benchmarks pending" |
| "126 TOPS NPU" | Hardware spec — verify against MINISFORUM datasheet before ads |
| Claw verticals + The Forge | UI shells ship; enable any combination in Settings; integrations need your bridges/credentials |
| Stripe pre-order | GTM OK — separate from appliance OTA/install readiness |

See [SYNC.md](SYNC.md) and [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md).

## Reference docs in curxor-os

| Source | Use |
|--------|-----|
| `docs/guides/02-architecture.md` | Architecture page source |
| `docs/guides/10-ms-s1-max-hardware-bios.md` | Hardware FAQ |
| `docs/guides/12-digital-action-layer.md` | Capital Claw + privacy story |
| `docs/quick-reference/operator-card.md` | Support download |
