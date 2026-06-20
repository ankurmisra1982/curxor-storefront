# Marketing ↔ Appliance Sync

Keep storefront copy aligned with `curxor-os` as both repos evolve.

## Automatic sync (preferred)

From the storefront repo (with `../curxor-os` present):

```bash
npm run sync:appliance
```

This runs automatically before `npm run dev` and `npm run build`. It reads:

- `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` → app **descriptions**
- `../curxor-os/version.json` → **BUNDLED // vX.Y.Z** badges

Output: `src/lib/generated/appliance-sync.ts` (committed for Vercel when the sibling repo is absent).

Override appliance path: `CURXOR_OS_ROOT=/path/to/curxor-os npm run sync:appliance`

Marketing IDs/names/icons: `scripts/marketing-map.ts` (storefront names vs appliance FRE ids).

## App naming (storefront vs Flight Command)

| Storefront (`src/lib/config.ts`) | Appliance (`ootb-apps.ts`) | Route |
|----------------------------------|----------------------------|-------|
| My Work | My Work | `/my-work` |
| My Shop | My Shop | `/my-shop` |
| Tesla Optimus Engine | Tesla Optimus Engine | `/optimus` |
| Robotaxi Fleet Manager | Robotaxi Fleet Manager | `/robotaxi` |
| Claw Cafe | Claw Cafe | `/claw-cafe` |
| **Content Creator** | **My Content Creator** | `/my-content` |
| **Invest Agent** | **My Capital** | `/my-capital` |
| **Claw Forge** | **Claw Forge** | `/claw-forge` |
| **Claw Forge** | **Claw Forge** | `/claw-forge` |

Marketing names are fine on the landing page; FRE/module IDs on appliance use the right column.

**Sync rule:** When adding an appliance app, update `ootb-apps.ts`, then run `npm run sync:appliance` and extend `scripts/marketing-map.ts` if the storefront marketing name/id differs.

## Copy guardrails (storefront vs audit)

| Storefront today | Audit note |
|------------------|------------|
| Spec: "Sub-millisecond ZeroMQ telemetry" | Aspirational — **not validated** until MS-S1 MAX mesh benchmarks |
| "Seven production-ready applications" | **UI shells ship**; many modules use mock data until hardware + integrations |
| "126 TOPS NPU" | Hardware spec — verify against MINISFORUM datasheet before ads |
| Stripe pre-order | GTM OK — separate from appliance OTA/install readiness |

See [APPLIANCE-AUDIT.md](APPLIANCE-AUDIT.md) § Mock / stub and Words to avoid.

## Brand tokens

| Token | Storefront | Appliance dashboard |
|-------|------------|---------------------|
| Purple accent | `#BF5AF2` (`neon-purple`) | `#bc13fe` (`cursor-glow`) |
| Background | `#000000` | `#000000` / `#0a0a0a` |
| Font | JetBrains Mono (layout) | JetBrains Mono + Fira Code |

Close enough for GTM; unify later if needed.

## When appliance version bumps

1. Bump `../curxor-os/version.json`
2. Run `npm run sync:appliance` (updates badges + generated file)
3. Refresh [TECHNICAL-HANDOFF.md](TECHNICAL-HANDOFF.md) if needed
4. Changelog page (when added)

## Digital layer (Invest Agent + Content Creator)

Appliance tools (engine, not LLM):

- `capital.execute_trade` → Alpaca paper via Python bridge
- `content.publish_post` → X API via Python bridge

Safe marketing line: *"Your LLM never talks to the internet — dedicated bridges handle trades and posts."*

Details: `../curxor-os/docs/guides/12-digital-action-layer.md`
