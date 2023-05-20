const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: './src/app.jsx',  
      // dependOn: ['react'],
    },
    // react: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Indecision',
      template: path.resolve(__dirname, './src/index.html'),
      favicon: path.resolve(__dirname, './src/assets/favicon.png'),
    }),
  ],
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx$/,
      exclude: /node_modules/
    }, {
      use: [
        "style-loader",
        'css-loader', 'postcss-loader'
      ],
      test: /\.css$/
    }, {
      use: [
        "style-loader",
        'css-loader', 'postcss-loader', 'sass-loader'
      ],
      test: /\.scss$/
    }]
  },
};
