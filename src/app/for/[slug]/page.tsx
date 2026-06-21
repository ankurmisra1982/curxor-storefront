import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PersonaPageContent } from "@/components/PersonaPageContent";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/config";
import { getPersonaPage, personaPages } from "@/lib/persona-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return personaPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPersonaPage(slug);
  if (!page) return {};

  return {
    title: `${page.title} — ${siteConfig.name}`,
    description: page.metaDescription,
    alternates: { canonical: `/for/${slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `${siteConfig.siteUrl}/for/${slug}`,
    },
  };
}

export default async function PersonaSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getPersonaPage(slug);
  if (!page) notFound();

  return (
    <SiteShell>
      <PersonaPageContent page={page} />
    </SiteShell>
  );
}
