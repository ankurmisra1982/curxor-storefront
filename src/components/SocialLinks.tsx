import { socialProfiles } from "@/lib/config";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  return (
    <nav aria-label="Social media" className={className}>
      {socialProfiles.map((profile) => (
        <a
          key={profile.id}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className={
            linkClassName ??
            "text-[10px] tracking-widest text-white/40 transition-colors hover:text-neon-purple"
          }
        >
          {profile.label.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
