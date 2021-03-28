const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
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
      port: 3111,
      open: 'Google Chrome',
      hot: true
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
                    // "debug": true
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
      new htmlWebpackPlugin({
        template: 'dist/index.html'
      })
    ]
  };
}