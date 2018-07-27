const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "index.html"),
    filename: "./index.html"
});

module.exports = {
  mode: "development",
  entry: "./app/index.js",
  output: {
    "path": __dirname+'/dist',
    "filename": "bundle_[hash].js"
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".jsx", ".js"]
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env",
              "react",
              // 'es2015',
              "stage-0"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
};