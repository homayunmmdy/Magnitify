/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
        {
            hostname: "media.licdn.com",
            protocol: "https",
        },
    ],
},
};

module.exports = nextConfig;
