import { faqItems, productIdentity, siteConfig, socialSameAs } from "@/lib/config";

type JsonLdProps = {
  /** Product + Offer — home and pricing only (not sitewide). */
  product?: boolean;
  /** FAQPage — homepage only (FAQ UI lives at /#faq). */
  faq?: boolean;
  /** Organization — safe sitewide. Default true. */
  organization?: boolean;
};

export function JsonLd({
  product = false,
  faq = false,
  organization = true,
}: JsonLdProps) {
  const waitlistOfferUrl = `${siteConfig.siteUrl}/#subscribe`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productIdentity.boxName,
    alternateName: ["CurXor", productIdentity.boxDescriptor],
    description: siteConfig.metaDescription,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: "AI Hardware",
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/opengraph-image`,
    offers: {
      "@type": "Offer",
      url: waitlistOfferUrl,
      priceCurrency: "USD",
      price: siteConfig.preOrderPriceUsd,
      availability: "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "CurXor Systems",
        url: siteConfig.siteUrl,
      },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "NPU", value: "126 TOPS" },
      { "@type": "PropertyValue", name: "Memory", value: "64GB LPDDR5X UMA" },
      {
        "@type": "PropertyValue",
        name: "Processor",
        value: "AMD Ryzen AI Max+ 395",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CurXor Systems",
    description: siteConfig.metaDescription,
    url: siteConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.siteUrl}/brand/curxor-mark-512.png`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contactEmail,
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: socialSameAs,
  };

  return (
    <>
      {product ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      ) : null}
      {faq ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      {organization ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      ) : null}
    </>
  );
}
