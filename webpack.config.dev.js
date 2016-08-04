const path = require('path')
const webpack = require('webpack')
const port = process.env.PORT || 3000

module.exports = {
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/js/moonshot.js')
  ],
  output: {
    path: path.resolve(`${__dirname}/build`),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/) // reduce ajv noise
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js(x?)$/,
        loaders: ['react-hot', 'babel'],
        // exclude: /node_modules/,
        include: path.join(__dirname, 'src/js')
      },
      {
        test: /\.(json|eslintrc)$/,
        loader: 'json-loader'
      },
      // {
      //   test: /\.scss$/,
      //   loader: 'style!css!sass?includePaths[]=' + path.resolve(__dirname, './node_modules')
      // },
      {
        test: /\.scss$/,
        loader: ['style', 'css', 'sass']
      },
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
        loader: 'file'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
}
