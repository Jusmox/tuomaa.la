/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  // If deploying to GitHub Pages with a custom domain or subdirectory, uncomment and set basePath:
  // basePath: '/your-repo-name',
  // trailingSlash: true,
}

module.exports = nextConfig


