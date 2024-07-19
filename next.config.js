/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sport-products.onrender.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ],
  },
}

module.exports = withNextIntl(nextConfig);
