# Storefront film promote — Aug 2026

> **Wave:** Picture-locked investor v3 · inception v3 · hero badge v4 → curxor.ai  
> **Owner:** CDO / storefront · masters remain in curxor-os  
> **Homepage cold hero:** unchanged (ship-now GTM)

---

## What went live where

| Job | Master | Public URL strategy | Surfaces |
|-----|--------|---------------------|----------|
| Diligence | investor-proof-v3 | Swap A → `…/g3-investor-proof-v1.mp4` (+ `*-v3` sibling) | `/press`, pitch deck links |
| Warm intro | inception-reel-v3 | Swap A → `…/g3-inception-reel-v1.mp4` (+ `*-v3` sibling) | `/signal` product tab, `/press` |
| Category / hype | hero-category-badge-v4 | **Versioned URL** `…/hero-category-badge-v4.mp4` | `/signal` default tab, `/press`, press zip |

Jul `hero-category-badge-v1.mp4` bytes left in place for rollback — not overwritten.

---

## Creative decisions

- **Swap A** for investor + inception (stable bookmarks).
- **Hero v4 URL** this wave (CTO HOLD on clobbering `*-v1`).
- `/signal` = two tabs only (vision + warm). Diligence stays `/press`.
- Product tab uses `inceptionReel` path — not legacy `hero-category-v1` alias.
- Nouns: desk crew · crewmate · Crew Cafe. Capture line: Aug 2026.

---

## Sync / code touchpoints

- `scripts/sync-g3-assets.ts` — inception + investor Swap A; stage badge v4; press zip prefers v4
- `src/lib/g3-demo.ts` — asset URLs + honesty date
- `src/components/CategoryFilmSection.tsx` — durations + product src
- `src/lib/press.ts` — download labels
- Docs: `HERO-FILM-HANDOFF.md`, `GTM-CHECKLIST.md`, `PITCH-DECK.md` fundraise table

---

## Residual risks

1. CDN may stick old MP4 bytes — hard-refresh / re-probe Content-Length after deploy.
2. Bookmarks to `hero-category-badge-v1.mp4` still get Jul vision until a future Swap A + archive.
3. Legacy `hero-category-v1.mp4` may still be Jul if anything deep-links it; live UI no longer uses it for the product tab.
4. Do not put dream/category film on homepage cold hero without CEO gate.

---

## Rollback

1. Point `categoryFilmAssets.heroCategoryBadge` back to `/demo/hero-category-badge-v1.mp4`.
2. Redeploy prior asset commit, or restore Jul bytes from git history for `*-v1` investor/inception if needed.
