import { common } from './webpack.common'
import webpack from 'webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import ErrorOverlayPlugin from 'error-overlay-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  ...common,
  devtool: 'cheap-module-source-map', // 'source-map'
  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 3440,
    inline: true,
    overlay: true,
    stats: {
      colors: true,
      chunks: true,
      chunkModules: false,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      children: false,
      source: false,
      warnings: false,
      noInfo: false,
      contentBase: './dist',
      hot: true,
      errors: true,
      modules: false,
      reasons: true,
      errorDetails: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev-server',
      template: 'template.html',
    }),
    new ESLintPlugin({
      files: 'src/**/*.(js|jsx|ts|tsx)',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      configFile: '.eslintrc.json',
      lintDirtyModulesOnly: true,
      emitError: true,
      emitWarning: true,
      failOnError: false,
      failOnWarning: false,
    }),
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin({}),
  ],
}
