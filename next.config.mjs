import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [{ hostname: "aceternity.com" }],
  },
};

export default nextConfig;
