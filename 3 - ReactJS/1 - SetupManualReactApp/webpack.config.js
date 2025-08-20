const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { use } = require("react");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // .js ou .jsx
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
  
  resolve: {
    extensions: [".js", ".jsx"],
  },
  
  mode: "development",

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
};
