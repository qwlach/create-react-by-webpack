const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  console.log(env, 1111111111)
  return {
    // mode: 'production',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      home: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        "@Utils": path.resolve('./src/utils')
      }
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
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              // @babel/preset-env 携带一些如es6或更高语法的智能转译插件，
              // @babel/preset-react react转译的一些插件
              // https://zhuanlan.zhihu.com/p/147083132
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "useBuiltIns": "usage", // entry时会将所有的polyfill全部引入
                    "corejs": 3,
                  }
                ],
                '@babel/preset-react'
              ],
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    "corejs": 3 // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
                  }
                ],
                // 编译类，默认loose:false 采用defineProperty来定义
                // loost: true 的时候采用赋值，会触发对象的getter
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new htmlWebpackPlugin({
        template: 'public/index.html',
        inject: "body",
      }),
      
    ],
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            minSize: 30000,
            minChunks: 1,
            chunks: 'initial',
            priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
          },
        }
      }
    }
  };
}