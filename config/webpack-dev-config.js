const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin();

module.exports =  smp.wrap({
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
    },
    devServer: {
      stats: "minimal",
      hot: true,
      historyApiFallback: true,
      port: 3002,
      host: "127.0.0.1",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      open: 'Google Chrome',
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
      new BundleAnalyzerPlugin(),
    ],
  }
);