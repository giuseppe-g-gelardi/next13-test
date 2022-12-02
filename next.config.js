/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['jherr-pokemon.s3.us-west-1.amazonaws.com', 'raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemon-server',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
