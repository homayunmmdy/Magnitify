import SiteConfig from "@/config/site";

/**
 * Generates a robots.txt configuration for the website.
 *
 * This function returns an object that defines rules for web crawlers (bots)
 * and specifies the location of the sitemap.
 *
 * @returns {{
 *   rules: {
 *     userAgent: string,
 *     allow: string,
 *     disallow: string,
 *   },
 *   sitemap: string
 * }} - An object containing rules for robots and the sitemap URL.
 */

export default function robots() {
  return {
    // Rules for web crawlers (bots)
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    // Location of the sitemap file
    sitemap: `${SiteConfig.siteURL}/sitemap.xml`,
  };
}
