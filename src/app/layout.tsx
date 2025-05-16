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
        <Script
            dangerouslySetInnerHTML={{
                __html: `
                var s=document.createElement("script");s.src="https://van.najva.com/static/js/main-script.js";s.defer=!0;s.id="najva-mini-script";s.setAttribute("data-najva-id","61192900-6d51-49d5-b787-f3c84cf20b72");document.head.appendChild(s);
                `
            }}
            />
    </>
);

const IRANSANS = localFont({ src: "./IRANSansX.woff2" });

export const metadata: Metadata = {
  verification: {
    google: "KEW2K6gHlUqeWRDxOY39arw_0ZD47OKapZN1bBZI1Go",
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
