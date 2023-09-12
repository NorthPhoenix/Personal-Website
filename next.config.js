/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nikist-portfolio-bucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '**/*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  // experimental: {
  //   swcPlugins: [['@swc-jotai/react-refresh', {}]],
  // },
}
