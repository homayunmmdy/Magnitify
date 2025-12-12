import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/fa",
        permanent: true,
      },
      {
        source: "/a",
        destination: "/fa/a",
        permanent: true,
      },
    ];
  },
   images: {
        remotePatterns: [
           {
              protocol: 'https',
              hostname: '**',
              port: '',
              pathname: '/**',
           },
           {
              protocol: 'http',
              hostname: '**',
              port: '',
              pathname: '/**',
           },
        ],
     },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
