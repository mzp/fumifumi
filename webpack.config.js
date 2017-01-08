/* @flow */

module.exports = {
  entry: "./front/src/main.js",
  output: {
    path: "public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
