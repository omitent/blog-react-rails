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
              'es2015',
              'react',
              'stage-0',
              // 'stage-1',
              // 'env',
            ],
            plugins: ['transform-decorators-legacy'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(scss|sass)$/,
      	use: [
          {
            loader: 'style-loader',
          },{
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          },{
            loader: 'sass-loader',
            options: {
              includePaths: ['./app/assets/sass', './app/assets/scss']
            }
          }
        ]      		
      }
    ]
  }
};