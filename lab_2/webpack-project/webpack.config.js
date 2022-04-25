const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
      template: __dirname + "/src/pages/about.html",
      filename:"about.html"
    })
  ],
  
}
