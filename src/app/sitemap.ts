import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://macsafety.com/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://macsafety.com/alpha",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://macsafety.com/contact",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://macsafety.com/impact-studies",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://macsafety.com/industries",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://macsafety.com/nixn",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://macsafety.com/offerings",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://macsafety.com/privacy",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://macsafety.com/xos",
      lastModified: new Date().toISOString(),
    },
  ];
}
