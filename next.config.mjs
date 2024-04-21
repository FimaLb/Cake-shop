/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "**",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
