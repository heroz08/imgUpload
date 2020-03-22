const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(jpg|jepg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(eot|woff2|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: "~",
      name: 'true',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority:  -10,
          filename: "vendors.js"
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: "chunk.js"
        }
      }
    }
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./dll_script/commons.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./dll_script/react.manifest.json')
    })
  ]
};

