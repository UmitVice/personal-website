import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: {
    // Pin the workspace root so a stray lockfile in a parent directory cannot
    // widen file watching and module resolution beyond this project.
    root: import.meta.dirname,
  },
};

export default nextConfig;
