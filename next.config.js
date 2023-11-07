/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "github.com",
      "upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
