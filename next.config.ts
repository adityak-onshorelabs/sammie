import type { NextConfig } from "next";
import path from "node:path";
import { DEFAULT_MICROSITE, PAGE_IDS } from "./config/microsites";

// Until this became a multi-microsite platform, the summit was served from the
// root and its pages sat at /agenda, /voices, … Those URLs are live and indexed,
// so every one of them 301s to the same page under the default microsite.
// Repointing the platform at a different event is a one-constant change.
const legacyRedirects = [
  { source: "/sammiejourney", destination: `/${DEFAULT_MICROSITE}/ecosystem` },
  ...PAGE_IDS.map((page) => ({
    source: `/${page}`,
    destination: `/${DEFAULT_MICROSITE}/${page}`,
  })),
].map((r) => ({ ...r, permanent: true }));

const nextConfig: NextConfig = {
  turbopack: {
    // Pin workspace root; a stray lockfile in the home dir otherwise confuses inference.
    root: path.join(__dirname),
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
