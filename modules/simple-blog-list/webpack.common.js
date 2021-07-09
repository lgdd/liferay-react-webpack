const path = require("path");
const webpack = require("webpack");
const outputPath = path.resolve(
    __dirname,
    "./src/main/resources/META-INF/resources/dist/"
);

module.exports = {
  entry: path.join(
      __dirname,
      "./src/main/resources/META-INF/resources/lib/index.js"
  ),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es2015",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: outputPath,
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    fallback: {
      "os": false,
      "path": false,
      "fs": false,
      "buffer": require.resolve("buffer/"),
    }
  }
};
