import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // Allow all pages
      },
    ],
    sitemap: "https://macsafety.com/sitemap.xml",
  };
}
