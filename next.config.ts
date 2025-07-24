import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => [
    {
      source: "/",
      destination: "/log-in",
      permanent: false,
    },
  ],
};

export default nextConfig;
