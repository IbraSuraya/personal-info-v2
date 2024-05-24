/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.myanimelist.net",
      },
      {
        protocol: 'https',
        hostname: "tailwindui.com",
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
