/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.salesforce.com", "eecenvironmental.com", "media.licdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      
    ],
  },
};

export default nextConfig;
