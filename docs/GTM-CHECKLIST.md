# GTM Checklist — Storefront vs Appliance

MS-S1 MAX in transit — use this to prioritize GTM work in **this repo**.

## Done in **curxor storefront** ✅

- [x] Landing page hero (*Vibe-Code the Physical World*)
- [x] Spec sheet matrix (Compute / Spine / OS)
- [x] Seven-app ecosystem grid + mobile carousel
- [x] 3D hardware scene (R3F)
- [x] Email capture (`/api/subscribe` + Resend)
- [x] Stripe pre-order CTA
- [x] X / Twitter link (`@curxorai`)
- [x] Industrial brand (black, neon purple, monospace)
- [x] GTM docs from appliance audit (`docs/`)

## Build next (this repo)

- [ ] Architecture / sovereign split page (four pillars + digital bridges diagram)
- [ ] Pricing / UMA tiers page (Economy / Balanced / Performance)
- [ ] FAQ (offline, OTA, robotics, paper trading disclaimer)
- [ ] Privacy policy + trading disclaimer
- [ ] Changelog tied to `../curxor-os/version.json`
- [ ] Press kit / boilerplate
- [ ] Soften or qualify "sub-millisecond" in spec matrix — see [SYNC.md](SYNC.md)
- [ ] Real product screenshots when hardware arrives

## Wait for **curxor-os + hardware**

- [ ] ROCm / UMA / mesh benchmarks
- [ ] "Works on MS-S1 MAX" validation badge
- [ ] Factory USB / cloud-init install video
- [ ] PDF operator guide (`../curxor-os/docs/scripts/export-guides-pdf.sh`)
- [ ] Live demo unit (Claw Cafe + captive portal)
- [ ] Production OTA release URL
- [ ] Customer case study

## Sync points

| When this changes… | Update here… |
|--------------------|--------------|
| `../curxor-os/version.json` | Version badges, changelog |
| `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` | `src/lib/config.ts` apps array |
| `../curxor-os/pillar-4-dashboard/lib/local-llm-catalog.ts` | Pricing/tiers copy |
| New audit findings | `docs/APPLIANCE-AUDIT.md` |

## Reference docs in curxor-os

| Source | Use |
|--------|-----|
| `docs/guides/02-architecture.md` | Architecture page |
| `docs/guides/10-ms-s1-max-hardware-bios.md` | Hardware FAQ |
| `docs/guides/12-digital-action-layer.md` | Invest Agent + Content Creator privacy story |
| `docs/quick-reference/operator-card.md` | Support download |
