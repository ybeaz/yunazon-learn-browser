const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = env => {
  return merge(common(env), {
    mode: 'development',
    output: {
      filename: 'js/[name].js',
    },
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      name: 'development-cache',
    },
    devServer: {
      port: 3440, // Does not work from here, but insted the config works from package.json
      host: '127.0.0.1',
    },
    optimization: {
      moduleIds: 'deterministic',
    },
    output: {
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
  })
}
