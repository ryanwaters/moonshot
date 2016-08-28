
const webpack = require('webpack')
const WebpackDevSever = require('webpack-dev-server')
const config = require('./webpack.config.dev')
const port = process.env.PORT || 3000

new WebpackDevSever(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: 'error-only'
}).listen(port, 'localhost', function(err, result) {
  if (err) {
    throw err
  }
  console.log(`Dev server running on port: ${port}`)
})
