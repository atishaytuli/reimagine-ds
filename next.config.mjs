/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [ "eecenvironmental.com", "media.licdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      
    ],
  },
};

export default nextConfig;
