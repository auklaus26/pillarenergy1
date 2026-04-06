import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/projects", "/contact", "/zh"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://pillarenergy.com.au${route}`,
    lastModified: new Date()
  }));
}
