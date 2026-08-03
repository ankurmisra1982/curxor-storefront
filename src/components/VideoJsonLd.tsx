import { siteConfig } from "@/lib/config";

export type VideoJsonLdItem = {
  name: string;
  description: string;
  /** Absolute path on site, e.g. /demo/hero-category-badge-v4.mp4 */
  contentPath: string;
  /** Absolute path for thumbnail, e.g. /demo/hero-film/01-conductor-glance@2x.png */
  thumbnailPath: string;
  uploadDate: string;
};

/** VideoObject JSON-LD for /signal and /press films. */
export function VideoJsonLd({ videos }: { videos: VideoJsonLdItem[] }) {
  const graph = videos.map((video) => ({
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    contentUrl: `${siteConfig.siteUrl}${video.contentPath}`,
    thumbnailUrl: `${siteConfig.siteUrl}${video.thumbnailPath}`,
    uploadDate: video.uploadDate,
    publisher: {
      "@type": "Organization",
      name: "CurXor Systems",
      url: siteConfig.siteUrl,
    },
  }));

  const schema =
    graph.length === 1
      ? { "@context": "https://schema.org", ...graph[0] }
      : { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
