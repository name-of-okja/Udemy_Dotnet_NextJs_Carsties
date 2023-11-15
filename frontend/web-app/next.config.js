/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // NextJs 14에서 기본 지원
    //serverActions: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

module.exports = nextConfig;
