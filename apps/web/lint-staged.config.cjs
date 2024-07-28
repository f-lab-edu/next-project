/* eslint-disable @typescript-eslint/no-var-requires */
const { nextLint } = require("../../lint-staged.config.utils.js");

module.exports = {
  "*.{ts,tsx,js,jsx}": (filenames) => [`turbo lint --filter=web -- --fix ${nextLint(__dirname, filenames)}`],
};
