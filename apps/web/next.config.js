/* eslint-disable @typescript-eslint/no-var-requires */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const withVanillaExtract = createVanillaExtractPlugin({
    identifiers: phase === PHASE_DEVELOPMENT_SERVER ? "debug" : "short",
  });

  const [protocol, hostname] = process.env.NEXT_PUBLIC_TMDB_RESOURCE_BASE_URL.split("://");

  console.log("~~~~~~~~~~~~~~~~~~~~", protocol, hostname);

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@repo/ui"],
    images: {
      domains: ["image.tmdb.org"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
          pathname: "/**",
        },
      ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };

  return withVanillaExtract(nextConfig);
};
