import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/LegalDocument";
import { SiteShell } from "@/components/SiteShell";
import { legalUpdated } from "@/lib/legal";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description:
    "How CurXor handles email subscriptions, local inference privacy, and sovereign appliance data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <LegalDocument
        eyebrow="LEGAL"
        title="Privacy Policy"
        updated={legalUpdated}
      >
        <LegalSection title="Overview">
          <p>
            CurXor Systems (&ldquo;CurXor,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            operates {siteConfig.siteUrl} and builds sovereign AI appliances. This
            policy describes what we collect on the marketing site and how CurXor OS
            handles data on your hardware.
          </p>
        </LegalSection>

        <LegalSection title="Website (curxor.ai)">
          <p>
            If you subscribe for launch updates, we collect your email address via
            our subscribe API and may store it through our email provider (Resend).
            We use it only for CurXor product and launch communications. You can
            unsubscribe by replying to any message or contacting us on{" "}
            {siteConfig.twitterHandle}.
          </p>
          <p>
            We use Vercel Analytics and Speed Insights for aggregated, privacy-oriented
            performance metrics. We do not sell your personal information.
          </p>
          <p>
            Pre-orders are processed by Stripe. Payment data is handled by Stripe under
            their privacy policy — we do not store full card numbers on our servers.
          </p>
        </LegalSection>

        <LegalSection title="CurXor appliance (local)">
          <p>
            CurXor OS is designed for sovereign operation. LLM inference, agent
            reasoning, prompts, and strategies run on your appliance. They are not
            sent to CurXor cloud services for processing.
          </p>
          <p>
            Outbound actions (trades, social posts, CRM calls) egress only through
            eno2 digital bridges you configure. Unplugging eno2 stops outbound agent
            traffic while keeping local inference available.
          </p>
          <p>
            OTA updates may phone home to CurXor update endpoints when you enable
            them — version checks and artifact downloads only, not your agent data.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Questions: {siteConfig.twitterHandle} on X or {siteConfig.contactEmail}.
          </p>
        </LegalSection>
      </LegalDocument>
    </SiteShell>
  );
}
