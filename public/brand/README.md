# CurXor brand assets

**Source of truth:** `docs/assets/CurXor-Hardware-Badge.svg` — edit there, then run:

```bash
npm run sync:brand
```

`sync:brand` runs automatically on `dev` and `build`.

**curXor is the chassis name** — the lockup on MS-S1 is the product name, not just a logo.

## Files

| File | Use |
|------|-----|
| `curxor-lockup.svg` | Header (desktop), OG image, press |
| `curxor-mark.svg` | Favicon source, social avatars |
| `curxor-wordmark.svg` | Footer, tight horizontal spaces |
| `curxor-hardware-badge.svg` | MS-S1 sticker print — **curXor** chassis name |
| `curxor-hardware-badge.png` | Raster fallback · decks |
| `curxor-mark-512.png` | Apple touch icon |

Social profile PNGs in `public/social/` are regenerated from `curxor-mark.svg`.
