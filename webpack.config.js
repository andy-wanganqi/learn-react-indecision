const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    index: {
      import: './src/app.jsx',
      dependOn: 'shared',
    },
    shared: 'react'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 8080
  }
}