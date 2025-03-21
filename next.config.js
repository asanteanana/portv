/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['fs', 'path']
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  typescript: {
    // Always allow production builds to succeed even with type errors
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
