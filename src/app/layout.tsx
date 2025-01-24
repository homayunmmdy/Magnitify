import { Footer, Header, ReactQueryProvider } from "@/components";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import SiteConfig from "@/config/site";

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
        <body className={IRANSANS.className}>
          <Header />
          <main className="mt-[120px]">{children}</main>
          <Footer />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
