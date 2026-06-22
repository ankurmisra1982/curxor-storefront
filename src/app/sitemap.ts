import type { MetadataRoute } from "next";
import { comparePages } from "@/lib/compare-pages";
import { siteConfig } from "@/lib/config";
import { personaPages } from "@/lib/persona-pages";

const staticRoutes = [
  "/outreach",
  "/capital",
  "/creator",
  "/pricing",
  "/architecture",
  "/changelog",
  "/press",
  "/privacy",
  "/terms",
  "/compare",
  ...comparePages.map((page) => `/compare/${page.slug}`),
  ...personaPages.map((page) => `/for/${page.slug}`),
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path.startsWith("/compare") || path.startsWith("/for") ? 0.7 : 0.6,
    })),
  ];
}
