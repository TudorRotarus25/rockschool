/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rockschool-ro.imgix.net',
      },
    ],
  },
}

module.exports = nextConfig
