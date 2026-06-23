import type { MetadataRoute } from "next";

// TODO: replace with your real deployed domain once you have one
const SITE_URL = "https://your-portfolio-domain.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
