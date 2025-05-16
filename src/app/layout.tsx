import { Footer, Header, ReactQueryProvider } from "@/components";
import { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import SiteConfig from "@/config/site";
import Script from "next/script";

const ads = (
    <>
      <Script
          dangerouslySetInnerHTML={{
            __html: `
            !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/LIwXMB4p/native-wikifarsi.vercel.app-42787/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
            `,
          }}
      />
    </>
);

const IRANSANS = localFont({ src: "./IRANSansX.woff2" });

export const metadata: Metadata = {
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir}  data-theme="light">
      {process.env.NEXT_PUBLIC_STATUS == "PRO" ? ads : null}
        <body className={IRANSANS.className}>
          <Header />
          <main className="mt-[120px]">{children}</main>
          <Footer />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
