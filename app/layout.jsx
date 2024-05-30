import "./globals.css";
import { Noto_Serif , Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteConfig from "./config/site";
import Navbar from "@/app/components/layout/Navbar"
import Footer from "@/app/components/layout/Footer"
import { ClerkProvider } from '@clerk/nextjs'
import { GoogleAnalytics } from '@next/third-parties/google'

const noto = Noto_Serif({subsets: ["latin"]})
const roboto = Roboto({subsets: ["latin"] , weight: "400"})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
        <body className={`${roboto.className} font-normal	`}>
          <Navbar />
          <div className="pt-[56px] bg-white">
            {children}
          </div>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICES} />
          <Analytics />
          <SpeedInsights />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
