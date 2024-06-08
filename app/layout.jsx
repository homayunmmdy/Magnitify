import { Roboto } from "next/font/google";
import { Dependencies, Footer, Navbar, Provider } from "./components/layout";
import SiteConfig from "./config/site";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

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
