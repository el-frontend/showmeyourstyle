/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '3mb',
    },
  },
}

export default nextConfig
