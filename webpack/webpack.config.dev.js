const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    vendor: ["react", "react-dom"],
    index: path.resolve(__dirname, "../src/index.tsx"),
  },

  output: {
    filename: "[name].bundle.js",
    // path: path.resolve(__dirname, '../dist'),
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
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
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

  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
    inline: false,
    overlay: true,
    port: 3001,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
};
