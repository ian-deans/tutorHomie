const path = require('path')

module.exports = {
  entry: './nextjs/app.js',
  output: {
    path: path.resolve('./src/server/public'),
    filename: 'app_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  }
}