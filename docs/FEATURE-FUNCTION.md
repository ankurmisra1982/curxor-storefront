# CurXor Storefront — Feature & Function (GTM)

**Version:** synced to curxor-os **0.2.0** · **URL:** https://curxor.ai  
**Appliance doc:** [curxor-os/docs/FEATURE-FUNCTION.md](../../curxor-os/docs/FEATURE-FUNCTION.md)

---

## Scope

The storefront is the **go-to-market surface** — not the appliance. It pre-sells the MS-S1 MAX bundle, captures leads, and mirrors Flight Command naming from `curxor-os`.

| In scope | Out of scope |
|----------|--------------|
| Landing, positioning, pre-order | Inference, mesh, engine runtime |
| Email list (Resend) | FRE, claw provisioning |
| 8 Claw marketing cards | Live trading / posting |
| Appliance version badges | OTA, captive portal |

---

## Live features

| Feature | Implementation |
|---------|----------------|
| **Hero** | “Mint AI Employees on Bare Metal” · $3,999 · viral hook |
| **3D scene** | R3F Nexus mesh (`HardwareScene.tsx`) |
| **Compute section** | 126 TOPS · 64GB UMA · cloud vs CurXor comparison |
| **Create-to-Earn** | 4-step Forge loop + example prompt |
| **Spec matrix** | Compute / Network / Claw Engine columns |
| **App ecosystem** | 10 Claws from `appliance-sync.ts` · mobile carousel |
| **Trust pages** | `/privacy`, `/terms`, `/architecture`, `/changelog`, `/press`, `/pricing` |
| **Unified comms copy** | FAQ + spec matrix — Telegram, Slack, WhatsApp, iMessage; wearables user-configured |
| **Stripe CTA** | `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` Payment Link |
| **Email API** | `POST /api/subscribe` → Resend segment + welcome mail |
| **OG image** | `/opengraph-image` |
| **Analytics** | Vercel Analytics · preorder + subscribe events |

---

## Synced Claw catalog

Source: `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` via `npm run sync:appliance`

| Storefront slug | Name | Appliance route |
|-----------------|------|-----------------|
| `claw-forge` | The Forge | `/claw-forge` |
| `capital-claw` | Capital Claw | `/my-capital` |
| `creator-claw` | Creator Claw | `/my-content` |
| `outreach-claw` | Outreach Claw | `/my-work` |
| `arbitrage-claw` | Arbitrage Claw | `/my-shop` |
| `signal-claw` | Signal Claw | `/optimus` |
| `swarm-claw` | Swarm Claw | `/robotaxi` |
| `engage-claw` | Engage Claw | `/claw-cafe` |

---

## Planned (GTM checklist)

Architecture page · pricing/UMA tiers · FAQ · privacy · changelog · press kit · real product photos · soften unvalidated latency claims.

See [GTM-CHECKLIST.md](GTM-CHECKLIST.md) and [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md).

---

## Related docs

| Doc | Purpose |
|-----|---------|
| [PRODUCT-POSITIONING.md](PRODUCT-POSITIONING.md) | Messaging, personas, guardrails |
| [SYNC.md](SYNC.md) | Storefront ↔ appliance naming |
| [TECHNICAL-HANDOFF.md](TECHNICAL-HANDOFF.md) | Spec sheet for copy |
| [curxor-os FEATURE-FUNCTION](../../curxor-os/docs/FEATURE-FUNCTION.md) | Full appliance feature catalog |
