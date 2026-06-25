# GTM Checklist — Storefront vs Appliance

MS-S1 MAX in transit — use this to prioritize GTM work in **this repo**.

## Done in **curxor storefront** ✅

- [x] Wave 0–2 — subscribe-first sitewide, category hero (*Mint autonomous employees on bare metal*), Act I/II story arc, operator composites, trust strip
- [x] Landing page hero (*Mint autonomous employees on bare metal.*)
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
- [x] Social profiles wired (footer, press, JSON-LD, llms.txt)
- [x] Creator Claw demo (`08-creator-claw.png`) + creator flow gallery
- [x] Trust strip (pre-order, ship window, support, terms link)
- [x] Price-includes section + four-year TCO table
- [x] Persona cards + `/for/traders` · `/for/creators` · `/for/agencies`
- [x] Compare hub + five competitor pages under `/compare/*`
- [x] Homepage reorder (demo → personas → compare first)
- [x] `/creator` landing page + Flight Command demo screenshots
- [x] `/capital` + `/outreach` Claw landing pages
- [x] `/signal` — Signal Claw · The Neural Link horizon visual + preview honesty ([signal-page.ts](../src/lib/signal-page.ts))
- [ ] **Next Interface film** (Program GTM-FILM) — FILM1 desk loop at G2 · full reveal FILM3 at G4 · see `../curxor-os/docs/curxor-os/FUTURE-ROADMAP.md`
- [ ] **Loop positioning** (IDEA-G11) — three-loop homepage section + hero A/B per [LOOP-POSITIONING.md](LOOP-POSITIONING.md) · **G3** after hardware captures
- [ ] **Trust loop graphic** (IDEA-G12) — Go Live + approval strip visual for landing or `/architecture` · G3
- [ ] **`/for-builders`** (IDEA-G13) — Build Plane power-user page · not main hero · G3+

## Before marketing (one-time ops)

- [x] **Contact email** — `hello@curxor.ai` in `siteConfig.contactEmail`; Resend domain verified on curxor.ai
- [ ] **Resend on Vercel** — verify `RESEND_API_KEY`, `RESEND_SEGMENT_ID`, `RESEND_FROM_EMAIL` on Vercel Production if subscribe smoke test fails → redeploy → test `POST /api/subscribe` returns `{"ok":true}`

## Build next (this repo)

- [x] Settings / user freedom copy (Claws toggle, optional frontier LLM, themes) — `src/lib/config.ts`
- [x] Pricing / UMA tiers page (`/pricing`) — synced from `local-llm-catalog.ts`
- [x] Demo screenshots in `public/demo/` (Home through Creator Claw + creator flows)
- [x] Cafe captures in `public/demo/cafe/` (Wave A — dev Flight Command UI; not MS-S1 verified)
- [x] Changelog auto-append on version bump (`sync:appliance` + `data/changelog-entries.json`)
- [x] Pricing compute ladder on `/pricing`
- [x] MIKY / agent NAS FAQ + comparison row
- [x] v0.2.0 marketing pass — messaging FAQ, architecture, agnostic wearables copy
- [ ] Product photography in hero when MS-S1 batch is photographed
- [ ] Claw walkthrough videos (replace screenshot heroes on `/capital` and `/creator` when re-recorded from Flight Command)
- [ ] Customer testimonials / press logos when available

## Roadmap (parked — no action)

- [ ] **CurXor Pro 128 ($4,999)** — second hardware tier on `/pricing` only (not hero). Standard 64 ($3,999) stays flagship GTM. Copy source: `../curxor-os/docs/curxor-os/MS-S1-128GB-UNBOX-CHEATSHEET.md` (Storefront copy block). **Triggers before ship:** 128 GB SKU unbox + ROCm verify; second Stripe checkout or SKU selector; FAQ “64 vs 128?”; keep first-boot install (~2–4 hr) fine print; no 70B-class hard claims until bench green. **CEO gates:** pricing-page-only vs pre-order live; waitlist vs Stripe for Pro.
- [ ] **Patron Link (Program MO)** — mobile companion PWA on appliance (`/m`), not App Store. **Primary storefront home:** `/signal` device-class card (`patron_mobile`) + optional FAQ “mobile app?” when gated. **Not:** hero, pre-order, or `/mobile` landing. Copy source: `../curxor-os/docs/curxor-os/MOBILE-PATRON-LINK.md`. **Say:** confirm/brief from phone · LAN pair · sovereign tokens on box. **Don’t say:** full mobile app · CurXor cloud push · App Store day one. **Triggers:** G3 (MO0 teaser + captures) · G4 (MO1 approvals demo · How it works mention). **Distinct from today:** Telegram/Slack/WhatsApp/iMessage gateways (already FAQ). Kiosk + Build Plane phone paths = ops only, not GTM.

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
| `siteConfig.contactEmail` | Trust strip, press, privacy/terms, llms.txt — **hello@curxor.ai** |

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
