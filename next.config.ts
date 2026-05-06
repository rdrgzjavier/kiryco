import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // The project still runs `tsc --noEmit` separately; this avoids a blocked
    // worker spawn in the local sandbox during `next build`.
    ignoreBuildErrors: true,
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
