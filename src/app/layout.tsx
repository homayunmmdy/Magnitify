import SiteConfig from "@/etc/config/stie";
import type { Metadata } from "next";
import { Dependencies, Footer, Provider } from "./(etc)/components";
import Header from "./(etc)/components/Header";
import "./globals.css";
import Script from "next/script";
import localFont from 'next/font/local'

const IRANSANS = localFont({ src: './IRANSansX.woff2' })

export const metadata: Metadata = {
  title: SiteConfig.title.slice(0, 60),
  description: SiteConfig.description.slice(0, 155),
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
    description: SiteConfig.description.slice(0, 155),
    siteName: SiteConfig.name,
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
    description: SiteConfig.description.slice(0, 155),
    creator: `@${SiteConfig.authorID}`,
    images: {
      url: `${SiteConfig.siteURL}/static/Image/logo.png`,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
};

const ads = (
  <>
    <Script
      dangerouslySetInnerHTML={{
        __html: `
        !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/4ntHaEIq/native-magnitifyfarsi.vercel.app-39953/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
            `,
      }}
    />
  </>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en" dir={SiteConfig.dir}>
        {process.env.NEXT_PUBLIC_STATUS == "PRO" ? ads : null}
        <body className={IRANSANS.className}>
          <Header />
          <main className="mt-[120px]">
            {children}
            <Dependencies />
          </main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
