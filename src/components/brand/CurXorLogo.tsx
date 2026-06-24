type CurXorLogoVariant = "lockup" | "mark" | "wordmark";

type CurXorLogoProps = {
  variant?: CurXorLogoVariant;
  className?: string;
  title?: string;
};

const SRC: Record<CurXorLogoVariant, string> = {
  lockup: "/brand/curxor-lockup.svg",
  mark: "/brand/curxor-mark.svg",
  wordmark: "/brand/curxor-wordmark.svg",
};

/** Renders synced brand SVGs from `npm run sync:brand` (source: docs/assets/CurXor-Hardware-Badge.svg). */
export function CurXorLogo({
  variant = "lockup",
  className,
  title = "CurXor",
}: CurXorLogoProps) {
  const classes = [
    variant === "mark" ? "h-8 w-8" : "h-8 w-auto",
    "shrink-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static synced SVG assets
    <img src={SRC[variant]} alt={title} className={classes} decoding="async" />
  );
}
