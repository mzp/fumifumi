/* @flow */

var path = require('path');

module.exports = {
  entry: "./front/src/main.jsx",
  output: {
    path: "public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "front/src"),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, "front/src")
    ],
    extensions: ['', '.js', '.jsx']
  }
};
