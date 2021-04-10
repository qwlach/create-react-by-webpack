const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       exclude: /node_modules/,
  //       use: ['style-loader', 'css-loader', 'postcss-loader'],
  //     },
  //     {
  //       test: /\.css$/,
  //       include: /node_modules/,
  //       use: ['style-loader', 'thread-loader', 'css-loader'],
  //     },
  //     {
  //       test: /\.less$/,
  //       exclude: /node_modules/,
  //       use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
  //     },
  //   ]
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: 'public/index.html',
      inject: "body",
    }),
  ],
}