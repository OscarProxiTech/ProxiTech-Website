/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // No basePath needed since we're using a custom domain at root
  // basePath and assetPrefix are commented out for root domain deployment
}

export default nextConfig
