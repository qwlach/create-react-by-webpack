const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./config/webpack-base-config');
const webpackDevConfig = require('./config/webpack-dev-config');
const webpackProdConfig = require('./config/webpack-prod.config')

module.exports = (env) => {
  console.log(env)
  if (env.NODE_ENV === 'local') {
    return merge(webpackBaseConfig, webpackDevConfig)
  }
  return merge(webpackBaseConfig, webpackProdConfig)
}