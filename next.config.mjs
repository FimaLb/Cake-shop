/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/ua",
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/ua/homepage",
      //   permanent: true,
      // },
      // {
      //   source: "/ua",
      //   destination: "/ua/homepage",
      //   permanent: true,
      // },
      // {
      //   source: "/en",
      //   destination: "/en/homepage",
      //   permanent: true,
      // },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
