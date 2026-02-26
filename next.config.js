/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Output for static export
  output: "export",

  // Needed for static export of images
  images: {
    unoptimized: true,
  },

  // Optional: Netlify prefers trailing slashes
  trailingSlash: true,
};

module.exports = nextConfig;