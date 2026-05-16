/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1
  },
  async redirects() {
    return [
      {
        source: "/zona/:slug",
        destination: "/zonas/:slug",
        permanent: true
      }
    ];
  },
  images: {
    domains: ["images.unsplash.com"]
  }
};

export default nextConfig;
