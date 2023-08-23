/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },
}
