/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export
  output: "export",

  // Optional: customize base path if deploying to a subfolder
  // basePath: '/my-app',

  // Optional: enable React strict mode
  reactStrictMode: true,

  // Optional: enable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;