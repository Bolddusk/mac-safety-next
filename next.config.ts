import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Amplify runs npm ci without devDependencies, so skip lint/type-check during build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(process.cwd(), "src"),
    };
    return config;
  },
};

export default nextConfig;
