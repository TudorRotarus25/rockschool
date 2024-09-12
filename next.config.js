/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'imgix',
    path: 'https://rockschool-ro.imgix.net',
  },
}

module.exports = nextConfig
