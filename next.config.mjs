/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and set if you're deploying to a subdirectory on GitHub Pages
  // basePath: '/ProxiTech-Website',
  // assetPrefix: '/ProxiTech-Website',
}

export default nextConfig
