import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin workspace root; a stray lockfile in the home dir otherwise confuses inference.
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      // "SAMMIE Journey" was retired and its route renamed to "The Ecosystem".
      // Keep old links (PastEditions buttons/anchors, external, SEO) resolving.
      { source: "/sammiejourney", destination: "/ecosystem", permanent: true },
    ];
  },
};

export default nextConfig;
