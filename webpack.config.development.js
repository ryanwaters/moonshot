var path = require(`path`)
var webpack = require(`webpack`)
var port = process.env.PORT || 4040

module.exports = {
  devtool: `eval-source-map`,
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    `webpack/hot/only-dev-server`,
    path.resolve(__dirname, `src/js/app.js`)
  ],
  output: {
    path: path.resolve(`${__dirname}/build`),
    filename: `bundle.js`,
    publicPath: `/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: `style!css`
      },
      {
        test: /\.js(x?)$/,
        loaders: [`react-hot`, `babel`],
        // exclude: /node_modules/,
        include: path.join(__dirname, `src/js`),
        presets: [
          `es2015`,
          `stage-0`,
          `react`
        ]
      },
      {
        test: /\.(json|eslintrc)$/,
        loader: `json-loader`
      },
      {
        test: /\.scss$/,
        loader: `style!css!sass?includePaths[]=` + path.resolve(__dirname, `./node_modules`)
      }
    ]
  },
  resolve: {
    extensions: [``, `.js`, `.jsx`, `.css`]
  }
}
