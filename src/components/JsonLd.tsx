import { faqItems, siteConfig, socialSameAs } from "@/lib/config";

export function JsonLd() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "CurXor Edge Nexus",
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
      url: siteConfig.stripeCheckoutUrl,
      priceCurrency: "USD",
      price: siteConfig.preOrderPriceUsd,
      availability: "https://schema.org/PreOrder",
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
    url: siteConfig.siteUrl,
    sameAs: socialSameAs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
