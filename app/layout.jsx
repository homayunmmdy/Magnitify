import { Roboto } from "next/font/google";
import { Dependencies, Footer, Navbar, Provider } from "./components/layout";
import SiteConfig from "./config/site";
import "./globals.css";

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


export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
        <body className={`${roboto.className} font-normal	`}>
          <Navbar />
          <main className="pt-[56px] bg-white">
            {children}
          </main>
          <Dependencies />
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
