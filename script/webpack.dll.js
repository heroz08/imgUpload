const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackDllConfig = {
  // mode: 'production',
  entry: {
    react: ['react', 'react-dom','react-router', 'react-router-dom', 'mobx-react'],
    commons: ['mobx']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './dll_script'),
    library: '[name]'
  },
  plugins: [
    new CleanWebpackPlugin({
      path: path.resolve(__dirname, './dll_script')
    }),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, './dll_script/[name].manifest.json')
    })
  ]
};

module.exports = webpackDllConfig;