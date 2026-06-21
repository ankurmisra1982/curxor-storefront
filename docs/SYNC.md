# Marketing ↔ Appliance Sync

Keep storefront copy aligned with `curxor-os` as both repos evolve.

## Automatic sync (preferred)

From the storefront repo (with `../curxor-os` present):

```bash
npm run sync:appliance
```

This runs automatically before `npm run dev` and `npm run build`. It reads:

- `../curxor-os/pillar-4-dashboard/lib/ootb-apps.ts` → canonical **names**, **descriptions**, appliance IDs
- `../curxor-os/version.json` → **BUNDLED // vX.Y.Z** badges
- `scripts/marketing-map.ts` → storefront slugs, icons, sort order only

Output: `src/lib/generated/appliance-sync.ts` (committed for Vercel when the sibling repo is absent).

Override appliance path: `CURXOR_OS_ROOT=/path/to/curxor-os npm run sync:appliance`

## App naming (canonical)

Appliance IDs and routes are stable. Display names pivot to the **Digital Wealth & Growth** paradigm — same on storefront and Flight Command.

| Appliance ID | Display name | Route | Nav short |
|--------------|--------------|-------|-----------|
| `claw-forge` | The Forge | `/claw-forge` | FORGE |
| `my-capital` | Capital Claw | `/my-capital` | CAP |
| `my-content-creator` | Creator Claw | `/my-content` | CRE |
| `my-work` | Outreach Claw | `/my-work` | OUT |
| `my-shop` | Arbitrage Claw | `/my-shop` | ARB |
| `tesla-optimus-engine` | Signal Claw | `/optimus` | SIG |
| `robotaxi-fleet-manager` | Swarm Claw | `/robotaxi` | SWARM |
| `claw-cafe` | Engage Claw | `/claw-cafe` | ENG |

Storefront slugs (e.g. `capital-claw`, `outreach-claw`) live in `scripts/marketing-map.ts` for URLs and section anchors. Names and descriptions always come from `ootb-apps.ts`.

**Sync rule:** When adding an appliance app, update `ootb-apps.ts`, extend `marketing-map.ts` with slug/icon/sortOrder, then run `npm run sync:appliance`.

## Copy guardrails (storefront vs audit)

| Storefront today | Audit note |
|------------------|------------|
| Spec: "Sub-millisecond ZeroMQ telemetry" | Aspirational — **not validated** until MS-S1 MAX mesh benchmarks |
| "Eight Claw verticals + The Forge" | **UI shells ship**; many modules use mock data until integrations land |
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
4. Add a bullet to `src/lib/changelog.ts` for the release
5. Run `npm run sync:appliance` and deploy storefront

## Digital layer (Capital Claw + Creator Claw)

Appliance tools (engine, not LLM):

- `capital.execute_trade` → Alpaca paper via Python bridge
- `content.publish_post` → X API via Python bridge

Safe marketing line (default local): *"Local inference by default — trades and posts egress only through eno2 bridges."*

Optional frontier LLMs (Settings → Intelligence, BYOK or OAuth): chat/planning only; does not change bridge egress rules. OpenAI supports OAuth PKCE sign-in; Google when `CURXOR_GOOGLE_OAUTH_CLIENT_ID` is configured on the appliance.

Details: `../curxor-os/docs/guides/12-digital-action-layer.md`
