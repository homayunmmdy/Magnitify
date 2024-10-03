import SiteConfig from "@/etc/config/stie";

export default function sitemap() {
  return [
    {
      url: SiteConfig.siteURL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SiteConfig.siteURL}/archive`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SiteConfig.siteURL}/contacts`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}