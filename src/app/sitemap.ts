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
      url: SiteConfig.siteURL, // Homepage URL
    },
    {
      url: `${SiteConfig.siteURL}/demo`, // URL for the demo page
    },
    {
      url: `${SiteConfig.siteURL}/services/1`, // URL for a specific service page
    },
    {
      url: `${SiteConfig.siteURL}/about`, // URL for the about page
    },
    {
      url: `${SiteConfig.siteURL}/contacts`, // URL for the contact page
    },
  ];
}
