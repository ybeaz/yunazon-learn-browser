const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
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
})
