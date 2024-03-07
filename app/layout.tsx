import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/1tavFZLi/native-mangnify.vercel.app-36551/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
            `,
          }}
        />
    </>
  );

  return (
    <html dir="rtl" lang="fa">
        <style global jsx>{`
    @font-face {
      font-family: 'CustomIranSans';
      font-style: normal;
      font-weight: 400;
      src: url("/static/Fonts/IRANSansWeb.eot");
      src: url("/static/Fonts/IRANSansWeb.eot?#iefix") format('embedded-opentype'),
        url("/static/Fonts/IRANSansWeb.woff2") format('woff2'),
        url("/static/Fonts/IRANSansWeb.woff") format('woff'),
        url("/static/Fonts/IRANSansWeb.ttf") format('truetype');
    }

    body {
      font-family: 'CustomIranSans', Tahoma;
    }
  `}</style>
      <head />
      <NavBar />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
