/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'energized-freedom-a5bd4233fe.media.strapiapp.com',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
