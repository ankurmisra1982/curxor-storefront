# CurXor Storefront — Feature & Function (GTM)

**Version:** synced to curxor-os **1.0.3** · **URL:** https://curxor.ai  
**Gate status:** G1/G2/G3 closed Jul 2026 · G4 next — [CTO-STATUS-REPORT.md](CTO-STATUS-REPORT.md)  
**Appliance doc:** [curxor-os/docs/FEATURE-FUNCTION.md](../../curxor-os/docs/FEATURE-FUNCTION.md)

---

## Scope

The storefront is the **go-to-market surface** — not the appliance. It pre-sells the MS-S1 MAX bundle, captures leads, and mirrors Flight Command naming from `curxor-os`.

| In scope | Out of scope |
|----------|--------------|
| Landing, positioning, pre-order, investor press kit | Inference, mesh, engine runtime |
| Email list (Resend) · prod UAT green Jul 8 | FRE, claw provisioning |
| 10 Claw marketing cards + The Forge | Live trading / posting at scale |
| G3 demo pack + category films on `/signal` | OTA fleet URL, captive portal install |
| Appliance version badges (synced) | External operator UAT (G4) |

---

## Live features

| Feature | Implementation |
|---------|----------------|
| **Hero** | *Your AI team. On a box you own.* · category spine in `metaDescription` · $3,999 · subscribe-first |
| **3D scene** | R3F hardware scene (`HardwareScene.tsx`) |
| **Symphony** | `#symphony` — conductor metaphor (`SymphonySection.tsx`) |
| **G3 desk gallery** | MS-S1 captures in `public/demo/g3/` — homepage demo section |
| **Spec matrix** | Compute / Network / Claw Engine columns |
| **App ecosystem** | 10 Claws from `appliance-sync.ts` · mobile carousel |
| **Category films** | `/signal#category-film` — vision ~61s default + product ~90s tab |
| **Trust pages** | `/privacy`, `/terms`, `/architecture`, `/changelog`, `/press`, `/pricing` |
| **Claw landings** | `/capital`, `/creator`, `/outreach`, `/signal` (Neural Link horizon) |
| **Personas** | `/for/traders`, `/for/creators`, `/for/agencies` |
| **Compare hub** | `/compare/*` — five competitor pages |
| **Unified comms copy** | FAQ + spec matrix — Telegram, Slack, WhatsApp, iMessage |
| **Stripe CTA** | `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` Payment Link |
| **Email API** | `POST /api/subscribe` → Resend segment + welcome mail (prod E2E green Jul 8) |
| **OG image** | `/opengraph-image` |
| **Press kit** | `/press` — boilerplate, films, G3 zip, diligence path |
| **Analytics** | Vercel Analytics · preorder + subscribe events |
| **SEO** | `sitemap.xml`, `robots.txt`, `llms.txt`, JSON-LD |

---

## Synced Claw catalog

Source: `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` via `npm run sync:appliance`

| Storefront slug | Name | Appliance route |
|-----------------|------|-----------------|
| `claw-forge` | The Forge | `/claw-forge` |
| `capital-claw` | Capital | `/my-capital` |
| `creator-claw` | Creator | `/my-content` |
| `outreach-claw` | Outreach | `/my-work` |
| `arbitrage-claw` | Arbitrage Claw | `/my-shop` |
| `signal-claw` | Signal Claw | `/optimus` |
| `swarm-claw` | Swarm Claw | `/robotaxi` |
| `engage-claw` | Engage Claw | `/claw-cafe` |
| `vital-claw` | Vital Claw | `/my-vital` |
| `kin-claw` | Kin Claw | `/my-family` |

---

## G4 / deferred (honest gaps)

| Item | Status |
|------|--------|
| MS-S1 batch product photography | G4 — hero uses composites + G3 desk strips |
| Claw walkthrough re-record on `/capital` `/creator` | Post-G3 box session |
| Loop homepage section (G11) | Post-fundraise |
| Trust loop graphic (G12) | Post-fundraise |
| `/for-builders` (G13) | Post-fundraise |
| HERO-v2 live badge shoot + full 90s merge | Post-validation film chat |
| Production OTA URL · factory USB video | G4 fleet readiness |

See [GTM-CHECKLIST.md](GTM-CHECKLIST.md) and [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md).

---

## Related docs

| Doc | Purpose |
|-----|---------|
| [PRODUCT-POSITIONING.md](PRODUCT-POSITIONING.md) | Messaging, personas, guardrails |
| [SYNC.md](SYNC.md) | Storefront ↔ appliance naming |
| [TECHNICAL-HANDOFF.md](TECHNICAL-HANDOFF.md) | Spec sheet for copy |
| [CTO-STATUS-REPORT.md](CTO-STATUS-REPORT.md) | Canonical gate status |
| [curxor-os FEATURE-FUNCTION](../../curxor-os/docs/FEATURE-FUNCTION.md) | Full appliance feature catalog |
