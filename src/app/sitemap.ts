import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

const staticRoutes = [
  "/pricing",
  "/architecture",
  "/changelog",
  "/press",
  "/privacy",
  "/terms",
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
      priority: 0.6,
    })),
  ];
}
