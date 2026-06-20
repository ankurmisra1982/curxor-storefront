# CurXor OS — Product Positioning (GTM)

Aligned with live storefront copy in `src/lib/config.ts` and `src/components/Hero.tsx`.

## Category

**Sovereign edge AI appliance** — not a cloud SaaS, not a generic mini PC. A packaged stack for local inference, physical agents, and operator UI on fixed hardware.

## Public taglines (in use)

| Surface | Copy |
|---------|------|
| Hero | **Vibe-Code the Physical World.** |
| Site config | *The Sovereign Edge Nexus for Physical AI* |
| Footer | *Designed for the edge.* |

Draft alternates (see prior brainstorm): *Your AI. Your metal. No cloud.*

## Target buyer personas

| Persona | Pain | CurXor answer |
|---------|------|---------------|
| Robotics builder | Cloud latency + data egress | Local VLA + mesh motor bus on eno2 |
| Small fleet / kiosk operator | Onboarding friction | Captive portal FRE on eno1 |
| Privacy-conscious creator/trader | LLM + API keys on same machine | LLM localhost-only; bridges isolate HTTPS |
| Edge AI hobbyist / prosumer | ROCm tuning hell | Opinionated Ollama defaults for gfx1151 UMA |

## Differentiators (lead with these)

1. **Sovereign inference** — models on `127.0.0.1`; engine rejects cloud LLM URLs
2. **Split network plane** — users on eno1, robots on eno2
3. **Flight Command Desktop** — industrial UI, live telemetry SSE, Master Claw sidebar
4. **Claw wizard** — intent → local model stack → engine profile
5. **OTA with rollback** — nightly updates, pre-update tarball, System Health log
6. **Digital action layer** — agent intents on ZMQ; Python bridges alone hit Alpaca/X

## OOTB module stories (landing page ↔ appliance)

See [SYNC.md](SYNC.md) for **Invest Agent** / **Content Creator** naming vs appliance **My Capital** / **My Content Creator**.

## Budget tiers (claw wizard — future pricing page)

| Tier | UMA cap | Audience |
|------|---------|----------|
| Economy | ~20 GB | Kiosks, single-claw |
| Balanced | ~36 GB | Default SMB |
| Performance | ~48 GB | VLA manipulation |

Source: `../curxor-os/pillar-4-dashboard/lib/local-llm-catalog.ts`

## Words to avoid (until hardware proof)

- “Production-ready on your desk today” (without SKU validation)
- **“Sub-millisecond” as guaranteed** (currently on spec matrix — soften or qualify)
- “Full VLA manipulation out of the box”
- “Live trading included” (paper Alpaca + credentials required)

## Visual identity

| Token | Storefront | Appliance |
|-------|------------|-----------|
| Purple | `#BF5AF2` | `#bc13fe` |
| Black | `#000000` | `#000000` |
| Font | JetBrains Mono | JetBrains Mono + Fira Code |
