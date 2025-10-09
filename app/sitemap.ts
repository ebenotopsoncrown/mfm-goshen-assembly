// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mfm-goshen-assembly.pages.dev";

  // List all static routes you currently have
  const routes = [
    "/",
    "/about",
    "/about/beliefs",
    "/about/leadership",
    "/branches",
    "/contact",
    "/donate",
    "/ministries",
    "/prayer-points",
    "/search",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  })) as MetadataRoute.Sitemap;
}
