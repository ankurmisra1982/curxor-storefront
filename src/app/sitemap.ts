import type { MetadataRoute } from "next";

/** Canonical host — keep in sync with siteConfig.siteUrl */
const SITE_URL = "https://curxor.ai";

/**
 * Inline route list — avoids heavy lib imports in the sitemap route
 * (prod was returning HTTP 500 on /sitemap.xml).
 * Keep slugs in sync with compare-pages.ts + persona-pages.ts.
 */
const paths: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/outreach", priority: 0.6, changeFrequency: "monthly" },
  { path: "/capital", priority: 0.6, changeFrequency: "monthly" },
  { path: "/creator", priority: 0.6, changeFrequency: "monthly" },
  { path: "/signal", priority: 0.6, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/architecture", priority: 0.6, changeFrequency: "monthly" },
  { path: "/changelog", priority: 0.6, changeFrequency: "monthly" },
  { path: "/press", priority: 0.6, changeFrequency: "monthly" },
  { path: "/journal", priority: 0.7, changeFrequency: "weekly" },
  { path: "/journal/harness-is-the-product", priority: 0.7, changeFrequency: "monthly" },
  { path: "/journal/intelligence-and-the-desk", priority: 0.7, changeFrequency: "monthly" },
  { path: "/journal/shallow-usage-gap", priority: 0.7, changeFrequency: "monthly" },
  { path: "/journal/why-im-building-curxor", priority: 0.7, changeFrequency: "monthly" },
  { path: "/journal/appliance-not-diy", priority: 0.7, changeFrequency: "monthly" },
  { path: "/journal/mint-autonomous-employees", priority: 0.7, changeFrequency: "monthly" },
  { path: "/journal/working-product-on-real-metal", priority: 0.7, changeFrequency: "monthly" },
  { path: "/journal/crew-cafe", priority: 0.7, changeFrequency: "monthly" },
  { path: "/journal/curxor-os-v1-0-3", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.6, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.6, changeFrequency: "monthly" },
  { path: "/compare", priority: 0.7, changeFrequency: "monthly" },
  { path: "/compare/clawbox", priority: 0.7, changeFrequency: "monthly" },
  { path: "/compare/perplexity-personal-computer", priority: 0.7, changeFrequency: "monthly" },
  { path: "/compare/miky", priority: 0.7, changeFrequency: "monthly" },
  { path: "/compare/mac-studio-ollama", priority: 0.7, changeFrequency: "monthly" },
  { path: "/compare/nemoclaw", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for/traders", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for/creators", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for/agencies", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified,
    changeFrequency,
    priority,
  }));
}
