import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { JournalArticle } from "@/components/JournalArticle";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/config";
import { getJournalEssay, journalEssays } from "@/lib/journal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalEssays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getJournalEssay(slug);
  if (!essay) return {};

  const title = `${essay.title} — ${siteConfig.name}`;

  return {
    title,
    description: essay.metaDescription,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      title: essay.title,
      description: essay.metaDescription,
      url: `${siteConfig.siteUrl}/journal/${slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: essay.publishedAt,
      authors: [essay.author],
    },
    twitter: {
      card: "summary_large_image",
      title: essay.title,
      description: essay.metaDescription,
    },
  };
}

function ArticleJsonLd({
  slug,
  title,
  description,
  publishedAt,
  author,
  kind,
}: {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  kind: string;
}) {
  const url = `${siteConfig.siteUrl}/journal/${slug}`;
  const authorSchema =
    author === "Ankur Misra"
      ? {
          "@type": "Person" as const,
          name: "Ankur Misra",
          url: "https://x.com/ankurmisra",
        }
      : {
          "@type": "Organization" as const,
          name: "CurXor Systems",
          url: siteConfig.siteUrl,
        };

  const schema = {
    "@context": "https://schema.org",
    "@type": kind === "release" ? "TechArticle" : "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: authorSchema,
    publisher: {
      "@type": "Organization",
      name: "CurXor Systems",
      url: siteConfig.siteUrl,
    },
    mainEntityOfPage: url,
    url,
    image: `${siteConfig.siteUrl}/opengraph-image`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function JournalEssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getJournalEssay(slug);
  if (!essay) notFound();

  return (
    <SiteShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: essay.title, path: `/journal/${slug}` },
        ]}
      />
      <ArticleJsonLd
        slug={slug}
        title={essay.title}
        description={essay.metaDescription}
        publishedAt={essay.publishedAt}
        author={essay.author}
        kind={essay.kind}
      />
      <JournalArticle essay={essay} />
    </SiteShell>
  );
}
