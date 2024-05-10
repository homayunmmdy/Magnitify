import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteConfig from "./config/site";
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Script from "next/script";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${SiteConfig.name} |‌ ${SiteConfig.name_en}`,
  description: SiteConfig.description,
};

const header = (
  <>
    <Script
      dangerouslySetInnerHTML={{
        __html: `
              !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/1tavFZLi/native-mangnify.vercel.app-36551/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
            `,
      }}
    />
    <Script src="https://s1.mediaad.org/serve/77542/retargeting.js" async />
  </>
);

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
        {process.env.NEXT_PUBLIC_STATUS == "PRO" ? header : null}
        <body className={inter.className}>
          <Navbar />
          <div className="pt-[75px] bg-white">
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
