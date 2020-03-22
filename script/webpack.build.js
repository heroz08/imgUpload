const webpackCommon = require('./webpack.common');
const webpackBuildConfig = {
  mode: 'production'
}

module.exports = Object.assign(webpackBuildConfig, webpackCommon);