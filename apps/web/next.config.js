/* eslint-disable @typescript-eslint/no-var-requires */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  const withVanillaExtract = createVanillaExtractPlugin({
    identifiers: phase === PHASE_DEVELOPMENT_SERVER ? "debug" : "short",
  });

  const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@repo/ui"],
  };

  return withVanillaExtract(nextConfig);
};
