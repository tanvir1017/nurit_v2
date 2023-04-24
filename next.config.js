/** @type {import('next').NextConfig} */

const environmentDestination =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://nuritinstitute.vercel.app";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/auth",
        destination: environmentDestination,
      },
      {
        source: "/dashboard",
        destination: environmentDestination,
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com", "i.ibb.co", "panel.brightskills.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
