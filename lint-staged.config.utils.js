const path = require("path");

const lintStagedUtils = {
  getRelativePath: function (dir, filenames) {
    return filenames.map((filename) => path.relative(dir, filename)).map((path) => `./${path}`);
  },
  nextLint: function (dir, filenames) {
    return `--file ${lintStagedUtils.getRelativePath(dir, filenames).join(" --file ")}`;
  },
};

module.exports = lintStagedUtils;
