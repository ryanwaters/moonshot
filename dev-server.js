
const webpack = require('webpack')
const logger = require('debug')
const Server = require('webpack-dev-server')
const dictatorship = require('dictatorship')

const config = require('./webpack.config.dev.js')

const debug = logger();
const port = process.env.PORT || 3000

export default () => {
  const server = new Server(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: config.output.path,
    hot: true,
    historyApiFallback: true,
    stats: 'error-only'
  })
  dictatorship.overthrow(port, () => {
    server.listen(port, 'localhost', function runner(err) {
      if (err) {
        throw err
      }
      debug('Server is now running on port %s.', port)
      debug('Check out http://localhost:%s/dashboard/editor!', port)
    })
  })
  return server
}
