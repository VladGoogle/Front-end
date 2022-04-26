const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  entry: __dirname + "/src/index.js", 
  output: {
    path: __dirname + '/dist', 
    filename: '[name].bundle.js', 
    
   },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack ",
      template: __dirname + "/src/pages/index.html",
      filename:"index.html"
    }),
    new HtmlWebpackPlugin({
      title: "Webpack ",
      template: __dirname + "/src/pages/photo.html",
      filename:"photo.html"
    }),
    new HtmlWebpackPlugin({
      title: "Webpack ",
      template: __dirname + "/src/pages/rozklad.html",
      filename:"rozklad.html"
    }),
    new HtmlWebpackPlugin({
      title: "Webpack ",
      template: __dirname + "/src/pages/news.html",
      filename:"news.html"
    }),
    new CopyPlugin({
      patterns: [
      { 
      from: __dirname + '/src/assets/images' , to: __dirname + '/dist',
      noErrorOnMissing: true,
      },
        
      ],
    }),
  ],
  
}
