/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/kiryco",
  assetPrefix: "/kiryco/",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  experimental: {
    cpus: 1
  }
};

export default nextConfig;
