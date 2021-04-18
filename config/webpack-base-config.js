const path = require('path');

module.exports = {
  entry: {
    home: './src/index.js'
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@Utils": path.resolve('./src/utils'),
      "@": path.resolve('./src/component')
    }
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
              "@babel/plugin-proposal-class-properties",
              [
                "import",
                {
                  "libraryName": "antd",
                  "style": "css"
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'thread-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ]
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      minSize: 30000,
      // minChunks: 2,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10 // 该配置项是设置处理的优先级，数值越大越优先处理
        },
        main: {
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
        },
      }
    }
  },
}