# GTM Checklist — Storefront vs Appliance

MS-S1 MAX in transit — use this to prioritize GTM work in **this repo**.

## Done in **curxor storefront** ✅

- [x] Landing page hero (*Mint AI Employees on Bare Metal.*)
- [x] Spec sheet matrix (Compute / Network / Claw Engine)
- [x] Eight Claw verticals grouped by category + mobile carousel
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

## Build next (this repo)

- [x] Settings / user freedom copy (Claws toggle, optional frontier LLM, themes) — `src/lib/config.ts`
- [ ] Pricing / UMA tiers page (Economy / Balanced / Performance)
- [ ] Demo screenshots in `public/demo/` (source: `../curxor-os/docs/demo-pack/`)
- [ ] Changelog auto-append on version bump (script, not manual edits)

## Wait for **curxor-os + hardware**

- [ ] ROCm / UMA / mesh benchmarks (publish validated latency numbers)
- [ ] "Works on MS-S1 MAX" validation badge
- [ ] Factory USB / cloud-init install video
- [ ] PDF operator guide (`../curxor-os/docs/scripts/export-guides-pdf.sh`)
- [ ] Live demo unit (Engage Claw + captive portal)
- [ ] Production OTA release URL
- [ ] Customer case study

## Sync points

| When this changes… | Update here… |
|--------------------|--------------|
| `../curxor-os/version.json` | Run `npm run sync:appliance` → badges, changelog meta |
| `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` | `npm run sync:appliance` → names/descriptions |
| `../curxor-os/pillar-4-dashboard/lib/app-agent-catalog.ts` | `npm run sync:appliance` → taglines |
| `../curxor-os/docs/guides/13-universal-ui-design.md` | Settings tab copy, FAQ frontier LLM answers |
| `../curxor-os/pillar-4-dashboard/lib/local-llm-catalog.ts` | Future UMA tiers page |

## Copy guardrails

| Claim | Status |
|-------|--------|
| "Sub-millisecond ZeroMQ telemetry" | **Removed** — use "low-latency local mesh; benchmarks pending" |
| "126 TOPS NPU" | Hardware spec — verify against MINISFORUM datasheet before ads |
| Eight Claw verticals | UI shells ship; integrations need your bridges/credentials |
| Stripe pre-order | GTM OK — separate from appliance OTA/install readiness |

See [SYNC.md](SYNC.md) and [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md).

## Reference docs in curxor-os

| Source | Use |
|--------|-----|
| `docs/guides/02-architecture.md` | Architecture page source |
| `docs/guides/10-ms-s1-max-hardware-bios.md` | Hardware FAQ |
| `docs/guides/12-digital-action-layer.md` | Capital Claw + privacy story |
| `docs/quick-reference/operator-card.md` | Support download |
