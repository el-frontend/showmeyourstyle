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
  transpilePackages: ['three']
}

export default nextConfig
