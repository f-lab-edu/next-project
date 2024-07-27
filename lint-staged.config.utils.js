const path = require("path");

function getRelativePath(dir, filenames) {
    return filenames.map(filename => path.relative(dir, filename)).map((path) => `./${path}`)
}

module.exports = {
    nextLint: function(dir, filenames) {
        return `--file ${getRelativePath(dir, filenames).join(" --file ")}`
    }
}