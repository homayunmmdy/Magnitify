import { Roboto } from "next/font/google";
import { Dependencies, Footer, Navbar, Provider } from "./components/layout";
import SiteConfig from "./config/site";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head'

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description.slice(0, 160),
  keywords: SiteConfig.keywords,
  robots: SiteConfig.robots,
  authors: SiteConfig.authors,
  verification: {
    google: "KEW2K6gHlUqeWRDxOY39arw_0ZD47OKapZN1bBZI1Go",
  },
  alternates: {
    canonical: SiteConfig.siteURL,
  },
  openGraph: {
    title: SiteConfig.name,
    description: SiteConfig.description.slice(0, 160),
    siteName: SiteConfig.siteName,
    authors: SiteConfig.author,
    images: {
      url: `${SiteConfig.siteURL}/static/Image/logo.png`,
      secureUrl: `${SiteConfig.siteURL}/static/Image/logo.png`,
      width: 1200,
      height: 630,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SiteConfig.name}`,
    description: SiteConfig.description.slice(0, 160),
    creator: `@${SiteConfig.authorID}`,
    images: {
      url: `${SiteConfig.siteURL}/static/Image/logo.png`,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
};
const headerAds = (
 <Head>
    <script type='text/javascript' src='//pl23679724.highrevenuenetwork.com/11/3e/74/113e74dd53bf78e561c72b5ef68b384a.js'></script>
    
    <link
      rel="preload"
      href="IRANSansWeb.woff2"
      as="font"
      crossOrigin=""
    />
  </Head>
);
const underBodyAds = (
  <>
  <script type='text/javascript' src='//pl23823706.highrevenuenetwork.com/74/14/40/74144023aa53db2c5389c966c415e1c8.js'></script>
  </>
);
export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
        <body className={`${roboto.className} font-normal	`}>
          {headerAds}
          <Navbar />
          <main className="pt-[56px] bg-white">
            {children}
          </main>
          <GoogleAnalytics gaId="G-JM76EX41FK" />
          <Dependencies />
          <Footer />
        </body>
        {underBodyAds}
      </html>
    </Provider>
  );
}
