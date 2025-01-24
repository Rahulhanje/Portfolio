/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['lottie.host', 'api.microlink.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: {}, // Replace true with an empty object or configure properly
  },
};

module.exports = nextConfig;
