import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/LegalDocument";
import { SiteShell } from "@/components/SiteShell";
import { legalUpdated } from "@/lib/legal";
import { applianceVersion, clawRosterLabel, siteConfig } from "@/lib/config";

const termsTitle = `Terms & Disclaimers — ${siteConfig.name}`;
const termsDescription =
  "Pre-order terms, trading disclaimers, and limitations for CurXor hardware and CurXor OS crewmates.";

export const metadata: Metadata = {
  title: termsTitle,
  description: termsDescription,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: termsTitle,
    description: termsDescription,
    url: `${siteConfig.siteUrl}/terms`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: termsTitle,
    description: termsDescription,
  },
};

export default function TermsPage() {
  return (
    <SiteShell>
      <LegalDocument
        eyebrow="LEGAL"
        title="Terms & Disclaimers"
        updated={legalUpdated}
      >
        <LegalSection title="Pre-order">
          <p>
            Pre-ordering on {siteConfig.siteUrl} reserves a place in our production
            queue at the listed price ({siteConfig.preOrderPrice}). Ship dates are
            announced as batches are scheduled. Pre-orders are subject to change
            until fulfillment — we will communicate material changes by email.
          </p>
          <p>
            Questions before or after pre-order: {siteConfig.contactEmail}. Full pre-order
            policy, support expectations, and refund handling are updated here as
            production batches are finalized.
          </p>
        </LegalSection>

        <LegalSection title="Not financial advice">
          <p>
            CurXor hardware and CurXor OS are technology products.{" "}
            <strong className="text-white/90">Capital</strong> and any
            trading-related features are tools for automation — not investment
            advice, portfolio management, or a guarantee of returns.
          </p>
          <p>
            You are solely responsible for compliance with securities, tax, and
            exchange rules in your jurisdiction. Paper trading is available for
            testing; live trading requires your own broker credentials and carries
            risk of loss.
          </p>
        </LegalSection>

        <LegalSection title="Software maturity">
          <p>
            CurXor OS {applianceVersion} ships with {clawRosterLabel}. Some integrations use
            mock or stub data until you connect real bridges (brokers, social, CRM,
            wearables, messaging gateways, etc.). Features described on the marketing site
            reflect product direction — verify behavior on your unit.
          </p>
        </LegalSection>

        <LegalSection title="Performance claims">
          <p>
            Hardware specs (126 TOPS NPU, 64GB UMA) reference manufacturer datasheets
            for the target platform. Mesh telemetry latency targets are design goals —
            published benchmarks follow full end-to-end validation of the box and the
            eno2 mesh.
          </p>
        </LegalSection>

        <LegalSection title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, CurXor Systems is not liable for
            trading losses, data loss, downtime, or indirect damages arising from use
            of the appliance or crewmate agents. Use at your own risk.
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
