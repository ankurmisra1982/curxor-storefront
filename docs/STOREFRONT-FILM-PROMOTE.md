# Storefront film promote — Aug 2026

> **Wave (2026-08-07):** Hero badge **v7** → curxor.ai as LIVE SEND category vision  
> **Prior wave (2026-08-06):** hero badge v6 · **Before that (2026-08-04):** v5.01 · **Before that (2026-08-02):** investor v3 · inception v3 · badge v4  
> **Owner:** CDO / storefront · masters remain in curxor-os  
> **Homepage cold hero:** unchanged (GTM still) · quiet “Watch category film” links into `/signal#category-film`  
> **Prod:** verify Content-Length after deploy — badge-v7 ≈ **29346963** (v6 ≈ 29419799 stays served)

---

## What went live where (current)

| Job | Master | Public URL strategy | Surfaces |
|-----|--------|---------------------|----------|
| Category / hype | hero-category-badge-**v7** | **Versioned URL** `…/hero-category-badge-v7.mp4` | `/signal` default tab, `/press`, press zip, journal update, hero film links |
| Category prior | hero-category-badge-v6 | Keep `…/hero-category-badge-v6.mp4` **served** | Rollback + every link already sent to an investor |
| Category older | hero-category-badge-v5.01 | Keep `…/hero-category-badge-v5.01.mp4` **served** | Older investor links |
| Category short | hero-category-badge-v4 | Keep `…/hero-category-badge-v4.mp4` | Cold / short asks · `/signal` “Short cut” · press |
| Diligence | investor-proof-v3 | Swap A → `…/g3-investor-proof-v1.mp4` (+ `*-v3` sibling) | `/press`, pitch deck links |
| Warm intro | inception-reel-v3 | Swap A → `…/g3-inception-reel-v1.mp4` (+ `*-v3` sibling) | `/signal` product tab, `/press` |

Jul `hero-category-badge-v1.mp4` bytes left in place for rollback — not overwritten.  
v4 kept as short alternate — not deleted.

---

## Creative decisions

- **v7** = live category send (~99s) · 1920x1080 · adds the Principal beat (desk levels /
  vocabulary rewrite) and the containment beat (sovereignty strip · memory on metal).
- **v6** = prior send (~89s, 1080p). Not retired — bytes stay served under their own URL.
- **v4** = short alternate (~62s).
- `/signal` = two tabs only (vision + warm). Diligence stays `/press`.
- Homepage: text + industrial chip → `/signal#category-film` · no autoplay · no cold hero film.
- Nouns: desk crew · crewmate · Crew Cafe. No G-milestone codes in public copy.

---

## Sync / code touchpoints

- `scripts/sync-g3-assets.ts` — stages every badge cut under its own versioned URL; press zip
  takes the newest available
- `src/lib/g3-demo.ts` — `heroCategoryBadge` + `heroCategoryBadgePrior` + `heroCategoryBadgeShort`
- `src/components/CategoryFilmSection.tsx` — runtime label (~99s), 16:9 frame (same as v6)
- `src/lib/press.ts` · `src/lib/journal.ts`
- Docs: `HERO-FILM-HANDOFF.md`, `PITCH-DECK.md`, `GTM-CHECKLIST.md`

---

## Residual risks

1. CDN may stick old MP4 bytes — hard-refresh / re-probe Content-Length after deploy.
2. Bookmarks to `hero-category-badge-v6.mp4` still get v6 (intentional — already-sent links).
3. Do not put dream/category film as homepage cold hero autoplay without CEO gate.

---

## Rollback

1. Point `categoryFilmAssets.heroCategoryBadge` at `categoryFilmAssets.heroCategoryBadgePrior`
   (v6). Its bytes are already staged and served, so this is a one-line code change with no
   re-sync and no asset redeploy.
2. Revert runtime labels ~99s → ~89s in `press.ts`, `journal.ts`, `CategoryFilmSection.tsx`.
3. Redeploy prior asset commit for bytes only if the CDN is stuck.
