import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: path.resolve(__dirname, 'app/js/index.js')
    // config: path.resolve(__dirname, `app/js/config.js`),
    // vendor: [`react`, `quill`, `lodash`]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    pathInfo: true,
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: path.resolve(__dirname, 'node_modules'),
        include: [
          path.resolve()
        ],
        query: {
          cacheDirectory: true,
          presets: [
            'es2015-webpack',
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        ),
        include: [
          path.resolve()
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        ),
        include: [
          path.resolve(),
          path.resolve('node_modules/react-datepicker/dist/*.min.css'),
          path.resolve('node_modules/rc-select/assets/index.css'),
          path.resolve('node_modules/fixed-data-table/dist/fixed-data-table.css'),
          path.resolve('**/quill/dist/*.css')
        ]
      },
      {
        test: /\.(json|eslintrc)$/,
        loader: 'json-loader'
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
    extensions: ['', '.js', '.css', '.scss', '.json', '.ico']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin('./app/css/style.css', 'style.css', {publicPath: '/'}),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new HtmlWebpackPlugin({
      title: 'Lumen',
      // chunks: [
      //   // `vendor`,
      //   // `config`,
      //   `bundle`
      // ],
      favicon: 'favicons/favicon.ico'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        // `config`,
        // `vendor`
      ],
      minChunks: 10
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      minimize: true,
      sourceMap: true,
      screwIe8: true
    })
  ]
}
