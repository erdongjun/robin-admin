const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    vendor: ["react", "react-dom"],
    index: path.resolve(__dirname, "../src/index.tsx"),
  },

  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      // css
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      // tsx
      {
        test: /\.(js|mjs|jsx|ts|tsx)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/env",
                "@babel/react",
                "@babel/preset-typescript",
              ],
              plugins: [
                [
                  "import",
                  { libraryName: "antd", libraryDirectory: "es", style: true },
                ],
              ],
            },
          },
        ],
      },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // 图片
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, loader: "url-loader" },
    ],
  },
  optimization: {
    minimizer: [],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      // ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
};
