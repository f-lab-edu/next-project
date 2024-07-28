module.exports = {
  "*.{ts,tsx,js,jsx}": () => [`turbo lint --filter=@repo/ui -- --fix`],
};
