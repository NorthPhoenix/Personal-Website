/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  // experimental: {
  //   swcPlugins: [['@swc-jotai/react-refresh', {}]],
  // },
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
