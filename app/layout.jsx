import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteConfig from "./config/site";
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { ClerkProvider } from '@clerk/nextjs'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
        <body className={inter.className}>
          <Navbar />
          <div className="pt-[75px] bg-white">
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
