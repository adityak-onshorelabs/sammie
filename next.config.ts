import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin workspace root; a stray lockfile in the home dir otherwise confuses inference.
    root: path.join(__dirname),
  },
};

export default nextConfig;
