const webpackCommon  = require('./webpack.common');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

webpackCommon.plugins.push(
  new htmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html')
  })
)

webpackCommon.plugins.push(
  new CleanWebpackPlugin()
)

const webpackDevConfig = {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    port: 8090,
    open: true,
    historyApiFallback: true
  }
}

module.exports = Object.assign(webpackDevConfig, webpackCommon);
