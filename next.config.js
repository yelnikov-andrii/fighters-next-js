/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sport-products.onrender.com',
      },
    ],
  },
}

module.exports = nextConfig
