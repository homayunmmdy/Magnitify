import Head from "next/head";
import LogoImg from "@/public/static/Image/Magnitify.png"
import { GoogleAnalytics } from '@next/third-parties/google'
import SiteConfig from "@/app/config/site";

const Meta = ({ title, description, keywords, canonical }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="title" content={title} />
    <meta name="kekywords" content={keywords} />
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={LogoImg} />
    <meta name="author" content={title} />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="google-site-verification" content="KEW2K6gHlUqeWRDxOY39arw_0ZD47OKapZN1bBZI1Go" />
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SiteConfig.siteUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={LogoImg} />
    <meta property="og:site_name" content="Magnitify" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={SiteConfig.siteUrl} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={LogoImg} />


    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICES} />
  </Head>
);

Meta.defaultProps = {
  title: SiteConfig.title,
  keywords: SiteConfig.keywords,
  description: SiteConfig.description.slice(0, 160),
  image: LogoImg,
  author: SiteConfig.title,
};

export default Meta;