import {
  Banner,
  Companies,
  EmailList,
  FAQs,
  Features,
  Hero,
  PriceList,
  StatcsSect,
} from "@/components";
import SiteConfig from "@/config/site";
import { Metadata } from "next";
import React from "react";

/**
 * Metadata configuration for the landing page.
 * This includes SEO-friendly tags for search engines and social media platforms.
 */
export const metadata: Metadata = {
  title: SiteConfig.title.slice(0, 60),
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: SiteConfig.authors,
  robots: SiteConfig.robots,

  alternates: {
    canonical: SiteConfig.siteURL,
  },
  openGraph: {
    title: SiteConfig.name,
    description: SiteConfig.description.slice(0, 150),
    siteName: SiteConfig.name,
    authors: SiteConfig.author,
    images: {
      url: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
      secureUrl: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
      width: 1200,
      height: 630,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SiteConfig.name}`,
    description: SiteConfig.description.slice(0, 150),
    creator: `@${SiteConfig.authorID}`,
    images: {
      url: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
};

/**
 * LandingPage Component
 *
 * This is the main landing page of the website. It includes various sections such as Hero, Features, Companies, etc.
 * The page is designed to be SEO-friendly and optimized for user engagement.
 *
 * @returns {React.FC} - Returns a React Functional Component representing the landing page.
 */

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hidden h1 tag for SEO purposes to include the title in the DOM */}
      <h1 className="hidden">{SiteConfig.title}</h1>
      <Hero />
      <Features />
      <Companies />
      <StatcsSect />
      <FAQs />
      <Banner />
      <PriceList />
      <EmailList />
    </>
  );
};

export default LandingPage;
