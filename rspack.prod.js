'use strict'

const path = require('path')
, HtmlWebpackPlugin = require('html-webpack-plugin')
, babelConfig = require('./babel.config')
, { rspack } = require('@rspack/core');


module.exports = {
  mode: "production",
  cache: true,
  entry: {
    app: {
      import: path.resolve('src', 'index.tsx'),
      dependOn: 'lib'
    },
    lib: [
       "preact"       
    ],
  },
  output: {
      path: path.resolve('app'),
      filename: "[name]_[chunkhash].js",
      chunkFilename: "[name]_[chunkhash].js",
      publicPath: 'app/'
  },
  module: {
    rules: [
      {        
        test: /\.(ts|js)x?$/,  
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
             cacheDirectory: true,
             ...babelConfig
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
    modules: ['node_modules'],  
    extensions: ['.tsx', '.ts', '.js', '.jsx']    
  },
  plugins : [    
    new HtmlWebpackPlugin({
      minify: false,
      filename: path.resolve('index.html'),
      template: path.resolve('template', 'index.ejs'),
      inject: false
    })
  ],
  optimization: {        
    minimize: true,    
    minimizer: [
       new rspack.SwcJsMinimizerRspackPlugin()
    ]
  },
  stats: {    
    colors: true
  }
}
