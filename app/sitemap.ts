import type { MetadataRoute } from "next";

// TODO: replace with your real deployed domain once you have one
const SITE_URL = "https://your-portfolio-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
