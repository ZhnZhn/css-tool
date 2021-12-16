'use strict'

const path = require('path')
, babelDevConfig = require('./babel.config')
, HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  cache: true,
  entry: {
    app: path.resolve('src', 'index.tsx')
  },
  devtool: 'inline-source-map',
  devServer: {        
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dev')
    },        
    allowedHosts: ['localhost','client.webSocketURL.hostname'],
    port: 8090
  },  
  output: {
      path: path.resolve('dev'),
      filename: "[name]_dev_[contenthash].js",
      chunkFilename: "[name]_dev_[contenthash].js"
  },
  module: {
    rules: [
      {
        //test: /\.jsx?$/,
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            ...babelDevConfig
          }
        },
        include: [
          path.join(__dirname),
          path.join(__dirname, "src"),
        ]
      }
    ]
  },
  resolve: {
    symlinks: false,
    modules: ['local_modules','node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins : [
    new HtmlWebpackPlugin({
        filename: path.resolve('dev', 'index.html'),
        template: path.resolve('template', 'index.ejs'),
        inject: false
    })
  ]
}
