# Storefront film promote — Aug 2026

> **Wave (2026-08-09):** Hero badge **v8.2** → curxor.ai as LIVE SEND category vision (fundraising lock)  
> **Prior wave (2026-08-07):** hero badge v7 · **Before that (2026-08-06):** v6 · **Before that (2026-08-04):** v5.01  
> **Owner:** CDO / storefront · masters in film worktree / curxor-os  
> **Homepage cold hero:** unchanged (GTM still) · quiet “Watch category film” → `/signal#category-film`  
> **Prod:** verify Content-Length after deploy — badge-v8.2 ≈ **26393476** (v7 ≈ 29346963 stays served)

---

## What went live where (current)

| Job | Master | Public URL strategy | Surfaces |
|-----|--------|---------------------|----------|
| Category / hype | hero-category-badge-**v8.2** | **Versioned URL** `…/hero-category-badge-v8.2.mp4` | `/signal` default tab, `/press`, journal links, fundraise |
| Category voice-only | hero-category-badge-v8.1 | Keep `…/hero-category-badge-v8.1.mp4` **served** | Same picture, no music |
| Category prior | hero-category-badge-v7 | Keep `…/hero-category-badge-v7.mp4` **served** | Rollback + already-sent investor links |
| Category older | hero-category-badge-v6 / v5.01 / v8 | Keep versioned URLs **served** | Older links |
| Category short | hero-category-badge-v4 | Keep `…/hero-category-badge-v4.mp4` | Cold / short asks · `/signal` “Short cut” · press |
| Diligence | investor-proof-v3 | Swap A → `…/g3-investor-proof-v1.mp4` (+ `*-v3` sibling) | `/press`, pitch deck links |
| Warm intro | inception-reel-v3 | Swap A → `…/g3-inception-reel-v1.mp4` (+ `*-v3` sibling) | `/signal` product tab, `/press` |

Jul `hero-category-badge-v1.mp4` bytes left in place for rollback — not overwritten.  
v4 kept as short alternate — not deleted.

---

## Creative decisions

- **v8.2** = live category send (~103s) · 1920x1080 · locked v8.1 picture + VO + founder
  ElevenLabs music @0.45 · fundraising lock 2026-08-09.
- **v8.1** = voice-only twin (same picture). Not default.
- **v7** = storefront prior (~99s). Not retired — bytes stay under their own URL.
- **v4** = short alternate (~62s).
- `/signal` = two tabs only (vision + warm). Diligence stays `/press`.
- Homepage: text chip → `/signal#category-film` · no autoplay · no cold hero film.
- Nouns: desk crew · crewmate · Crew Cafe. No G-milestone codes in public copy.

---

## Sync / code touchpoints

- `scripts/sync-g3-assets.ts` — stages every badge cut under its own versioned URL; press zip
  takes the newest available
- `src/lib/g3-demo.ts` — `heroCategoryBadge` + `heroCategoryBadgePrior` + `heroCategoryBadgeShort`
- `src/components/CategoryFilmSection.tsx` — runtime label (~103s), 16:9 frame
- `src/lib/press.ts` · `src/lib/journal.ts`
- Docs: `HERO-FILM-HANDOFF.md`, `PITCH-DECK.md`, `GTM-CHECKLIST.md`

---

## Residual risks

1. CDN may stick old MP4 bytes — hard-refresh / re-probe Content-Length after deploy.
2. Bookmarks to `hero-category-badge-v7.mp4` still get v7 (intentional — already-sent links).
3. Do not put dream/category film as homepage cold hero autoplay without CEO gate.

---

## Rollback

1. Point `categoryFilmAssets.heroCategoryBadge` at `categoryFilmAssets.heroCategoryBadgePrior`
   (v7). Its bytes are already staged and served, so this is a one-line code change with no
   re-sync and no asset redeploy.
2. Revert runtime labels ~103s → ~99s in `press.ts`, `journal.ts`, `CategoryFilmSection.tsx`.
3. Redeploy prior asset commit for bytes only if the CDN is stuck.
