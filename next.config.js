/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://hotel-service-ts-production.up.railway.app/:path*' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
