import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteConfig from "./config/site";
import Navbar from "./ui/components/Navbar"
import Footer from "./ui/components/Footer"
import { useLocale } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${SiteConfig.name} |‌ ${SiteConfig.name_en}`,
  description: SiteConfig.description,
};


export default function RootLayout({ children, params }) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} data-theme="cupcake">
      {
        locale === 'fa' ? (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/1tavFZLi/native-mangnify.vercel.app-36551/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
            `,
              }}
            />
            <script src="https://s1.mediaad.org/serve/77542/retargeting.js" async />
          </>
        ) : null
      }
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
