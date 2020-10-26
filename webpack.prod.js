const { merge } = require("webpack-merge");
const common = require("./webpack.common");

// Removed source map completely
// (previously )
module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
});