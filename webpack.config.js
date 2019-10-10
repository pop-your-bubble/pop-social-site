const path = require("path");
HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC_DIR = path.join(__dirname, "/client");
const DIST_DIR = path.join(__dirname, "/dist");
const favicon = `${SRC_DIR}/images/pop-icon.png`;

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `${SRC_DIR}/htmlTemplates/indexTemplate.html`,
      favicon: favicon,
      title: "Pop",
    }),
    new HtmlWebpackPlugin({
      filename: "termsOfUse.html",
      template: `${SRC_DIR}/htmlTemplates/termsOfUseTemplate.html`,
      favicon: favicon,
      title: "Pop",
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader"
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]"
        }
      }
    ]
  }
};
