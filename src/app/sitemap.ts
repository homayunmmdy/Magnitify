import SiteConfig from "@/config/site";

/**
 * Generates a sitemap for the website.
 *
 * This function returns an array of objects, each representing a URL in the sitemap.
 * The URLs are constructed using the base URL from the site configuration.
 *
 * @returns {Array<{url: string}>} - An array of objects containing the URLs for the sitemap.
 */
export default function sitemap() {
  return [
    {
      url: SiteConfig.siteURL,
    },
    {
      url: `${SiteConfig.siteURL}/services/1`,
    },
    {
      url: `${SiteConfig.siteURL}/services/2`,
    },
    {
      url: `${SiteConfig.siteURL}/services/3`,
    },
    {
      url: `${SiteConfig.siteURL}/services/4`,
    },
    {
      url: `${SiteConfig.siteURL}/services/5`,
    },
  ];
}
