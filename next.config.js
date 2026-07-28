/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,

compress:true,

poweredByHeader:false,

swcMinify:true,
  images: {
    formats:[
      'image/avif',
      'image/webp'
      ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "taybperfumes.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
