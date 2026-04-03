import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** Add remotePatterns when pulling CDN or distributor image URLs */
    remotePatterns: [],
  },
};

export default nextConfig;
