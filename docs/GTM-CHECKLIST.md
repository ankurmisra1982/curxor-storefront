# GTM Checklist — Storefront vs Appliance

MS-S1 MAX **unboxed 2026-06-28** — **G1/G2/G3 closed Jul 2026** · CurXor OS **v1.0.3** (golden path Jun 29; G2 depth + G3 demo captures Jul 8). See [CTO-STATUS-REPORT.md](CTO-STATUS-REPORT.md). Use this to prioritize GTM work in **this repo**.

## Done in **curxor storefront** ✅

- [x] Wave 0–2 — subscribe-first sitewide, ownership hero (*Your AI team. On a box you own.*), category spine in meta/deck, Act I/II story arc, operator composites, trust strip
- [x] Landing page hero (*Your AI team. On a box you own.*) · category in `metaDescription`
- [x] Spec sheet matrix (Compute / Network / OpenClaw Engine)
- [x] Desk crew workspaces (9 verticals + The Forge) grouped by category + mobile carousel
- [x] Day One hub section (Home / chat / stay local / Settings)
- [x] Flight Command screenshot hero (R3F 3D scene retired — unused deps removed)
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
- [x] Crewmate taglines synced from `app-agent-catalog.ts` when sibling repo present
- [x] Social profiles wired (footer, press, JSON-LD, llms.txt)
- [x] Creator demo (`08-creator.png`) + creator flow gallery
- [x] Hero film comp plates (`public/demo/hero-film/*@2x.png`) — sync from `../curxor-os/docs/gtm/hero-film-figma/exports/`
- [x] Trust strip (pre-order, ship window, support, terms link)
- [x] Price-includes section + four-year TCO table
- [x] Persona cards + `/for/traders` · `/for/creators` · `/for/agencies`
- [x] Compare hub + five competitor pages under `/compare/*`
- [x] Homepage reorder (demo → personas → compare first)
- [x] `/creator` landing page + Flight Command demo screenshots
- [x] `/capital` + `/outreach` desk landing pages
- [x] `/signal` — Signal · The Neural Link horizon visual + preview honesty ([signal-page.ts](../src/lib/signal-page.ts))
- [x] **Hero film v5.1 script + comp plates** (G3 · `46f9257`) — [HERO-FILM-HANDOFF.md](HERO-FILM-HANDOFF.md) · `public/demo/hero-film/` · Figma proto linked
- [x] **Hero film UI** — `/signal` category section + film tabs · `/press` downloads
- [x] **Hero film MP4** — badge vision (~62s v4) + warm intro (~89s inception) on /signal · investor proof (~2:50) on /press
- [x] **Align kickoff** — [STOREFRONT-ALIGN-KICKOFF.md](STOREFRONT-ALIGN-KICKOFF.md) for post-deploy verification chat
- [x] **Track C deploy (STORE-C-DEPLOY)** — sync/g1-green-mirror-p0 → main · G3 assets on prod · category film labeled ~90s Act I alias
- [x] **Aug 2026 film promote** — Swap A investor + inception v3 · hero badge v4 URL · [STOREFRONT-FILM-PROMOTE.md](STOREFRONT-FILM-PROMOTE.md)
- [ ] **Loop positioning** (IDEA-G11) — three-loop homepage section + hero A/B per [LOOP-POSITIONING.md](LOOP-POSITIONING.md) · **deferred post-fundraise (G11)**
- [ ] **Trust loop graphic** (IDEA-G12) — Go Live + approval strip visual for landing or `/architecture` · **deferred post-fundraise (G12)**
- [ ] **`/for-builders`** (IDEA-G13) — Build Plane power-user page · not main hero · **deferred post-fundraise (G13)**

## Before marketing (one-time ops)

- [x] **Contact email** — `hello@curxor.ai` in `siteConfig.contactEmail`; Resend domain verified on curxor.ai
- [x] **Resend on Vercel** — `POST /api/subscribe` prod smoke **green** (2026-07-08 · `{"ok":true}`)
- [x] **Resend welcome email** — prod E2E delivery confirmed (2026-07-08)
- [x] **Prod UAT** — 20 pages · 12 assets · subscribe POST · film tabs · press zip **green** (2026-07-08)

## Deferred post-fundraise (do not build pre-close)

| ID | Item | Why defer |
|----|------|-----------|
| G11 | Three-loop homepage section ([LOOP-POSITIONING.md](LOOP-POSITIONING.md)) | Post-fundraise · homepage H1 unchanged |
| G12 | Trust loop graphic (Go Live + approval strip) | Post-fundraise |
| G13 | `/for-builders` page (Build Plane) | G3+ · not conversion-critical |
| HERO-v2 | Live Layer A badge shoot + full 90s A+B+C merge | Post-validation film chat |
| Product photography | MS-S1 batch hero | Hardware shoot gate |
| Desk walkthrough re-record | Replace old webm on `/capital` `/creator` | Post-G3 box session |

## Build next (this repo)

- [x] Settings / user freedom copy (desk crew toggle, optional frontier LLM, themes) — `src/lib/config.ts`
- [x] Pricing / UMA tiers page (`/pricing`) — synced from `local-llm-catalog.ts`
- [x] Demo screenshots in `public/demo/` (Home through Creator + creator flows)
- [x] Cafe captures in `public/demo/cafe/` (Crew Cafe — re-shot with desk-crew chrome when box preset allows)
- [x] Changelog auto-append on version bump (`sync:appliance` + `data/changelog-entries.json`)
- [x] Pricing compute ladder on `/pricing`
- [x] MIKY / agent NAS FAQ + comparison row
- [x] v0.2.0 marketing pass — messaging FAQ, architecture, agnostic wearables copy
- [ ] Product photography in hero when MS-S1 batch is photographed
- [ ] Desk walkthrough videos (replace screenshot heroes on `/capital` and `/creator` when re-recorded from Flight Command)
- [ ] Customer testimonials / press logos when available

## Roadmap (parked — no action)

- [ ] **CurXor Pro 128 ($4,999)** — second hardware tier on `/pricing` only (not hero). Standard 64 ($3,999) stays flagship GTM. Copy source: `../curxor-os/docs/curxor-os/MS-S1-128GB-UNBOX-CHEATSHEET.md` (Storefront copy block). **Triggers before ship:** 128 GB SKU unbox + ROCm verify; second Stripe checkout or SKU selector; FAQ “64 vs 128?”; keep first-boot install (~2–4 hr) fine print; no 70B-class hard claims until bench green. **CEO gates:** pricing-page-only vs pre-order live; waitlist vs Stripe for Pro.
- [ ] **Patron Link (Program MO)** — mobile companion PWA on appliance (`/m`), not App Store. **Primary storefront home:** `/signal` device-class card (`patron_mobile`) + optional FAQ “mobile app?” when gated. **Not:** hero, pre-order, or `/mobile` landing. Copy source: `../curxor-os/docs/curxor-os/MOBILE-PATRON-LINK.md`. **Say:** confirm/brief from phone · LAN pair · sovereign tokens on box. **Don’t say:** full mobile app · CurXor cloud push · App Store day one. **Triggers:** G3 (MO0 teaser + captures) · G4 (MO1 approvals demo · How it works mention). **Distinct from today:** Telegram/Slack/WhatsApp/iMessage gateways (already FAQ). Kiosk + Build Plane phone paths = ops only, not GTM.

## Wait for **curxor-os + hardware**

- [x] MS-S1 MAX received and base install (Jun 28 — FRE green, models pulled)
- [x] G1 golden path closed (eno cables, captive/mesh, `verify-unbox-day.sh`, smile test) — validation badge flipped in P0 mirror wave
- [ ] Published mesh latency benchmarks (topology verified on box; numbers pending)
- [x] MS-S1 MAX validation badge (hero + `/architecture#validation`) — G1 closed copy live
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

## Track C deploy log

| Date | Commit | Notes |
|------|--------|-------|
| 2026-08-02 | `b7f406f` | Film promote · Swap A investor/inception v3 · badge v4 URL · prod [READY](https://vercel.com/cur-xor/curxor-storefront/GZsPHsXGWmA1fz7Ud4iNudCEAwC3) · [STOREFRONT-FILM-PROMOTE.md](STOREFRONT-FILM-PROMOTE.md) |
| 2026-07-08 | `815e547` | STORE-C-DEPLOY closed · Vercel prod [READY](https://vercel.com/cur-xor/curxor-storefront/5vHpe6S45tiQMSvnggaLtStuemuk) · main branch · all asset smoke green |
| 2026-07-08 | — | **Prod UAT green** — full page graph · films · press zip · subscribe E2E · doc mirror closed |

## Reference docs in curxor-os

| Source | Use |
|--------|-----|
| `docs/guides/02-architecture.md` | Architecture page source |
| `docs/guides/10-ms-s1-max-hardware-bios.md` | Hardware FAQ |
| `docs/guides/12-digital-action-layer.md` | Capital desk + privacy story |
| `docs/quick-reference/operator-card.md` | Support download |
