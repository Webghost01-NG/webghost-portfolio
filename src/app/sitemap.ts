import type { MetadataRoute } from "next";
import { caseStudyProjects } from "@/content/portfolio";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webghost-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/writing", "/contact", ...caseStudyProjects.map(({ slug }) => `/work/${slug}`)];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date("2026-10-06"), changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : route.startsWith("/work/") ? .8 : .6 }));
}
