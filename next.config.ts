import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ hostname: "placehold.co" }],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
