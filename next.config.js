/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [{
      source: '/api/hello',
      destination: 'http://164.92.178.88:5000/:slug*'
    }]
  }
}

module.exports = nextConfig
