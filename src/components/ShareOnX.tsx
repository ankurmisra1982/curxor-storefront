import { siteConfig } from "@/lib/config";

type ShareOnXProps = {
  text: string;
  className?: string;
  label?: string;
};

export function ShareOnX({
  text,
  className = "border border-white/15 px-3 py-2 text-[10px] tracking-[0.2em] text-white/50 transition-colors hover:border-neon-purple/40 hover:text-neon-purple",
  label = "SHARE ON X",
}: ShareOnXProps) {
  const tweet = text.includes("@curxorai") ? text : `${text} ${siteConfig.twitterHandle}`;
  const href = `https://x.com/intent/tweet?text=${encodeURIComponent(tweet)}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label} →
    </a>
  );
}
