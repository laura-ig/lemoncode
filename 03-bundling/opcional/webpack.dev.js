const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader", 
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader"
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    devMiddleware: {
      stats: "errors-only",
    },
  },
  devtool: "eval-source-map",
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ],
});