import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/about", "/services", "/projects", "/contact", "/zh"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://pillarenergy.com.au${route}`,
    lastModified: new Date()
  }));
}
