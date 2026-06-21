import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComparePageContent } from "@/components/ComparePageContent";
import { SiteShell } from "@/components/SiteShell";
import { comparePages, getComparePage } from "@/lib/compare-pages";
import { siteConfig } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) return {};

  return {
    title: `${page.title} — ${siteConfig.name}`,
    description: page.metaDescription,
    alternates: { canonical: `/compare/${slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `${siteConfig.siteUrl}/compare/${slug}`,
    },
  };
}

export default async function CompareSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) notFound();

  return (
    <SiteShell>
      <ComparePageContent page={page} />
    </SiteShell>
  );
}
