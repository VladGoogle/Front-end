require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: __dirname + "/src/index.js", 
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js', 
    publicPath: '/' 
  },
  module: {  
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                     browsers: 'last 2 versions',
                    },
                  ],
                ],
              },
            },
          }
        ],

      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: process.env.ASSET_IMAGES_PATH,
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: process.env.ASSET_FONT_PATH,
          },
        },
      },
    ]
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
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: process.env.STYLE_FILE
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
}
