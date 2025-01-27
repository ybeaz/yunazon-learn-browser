const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

module.exports = env => {
  return merge(common(env), {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'web-build/dist'),
      filename: 'js/[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new WebpackManifestPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.join(__dirname, "'web-build/dist/**/*")],
      }),
      // new StatsWriterPlugin({
      //   filename: '../stats.json',
      //   stats: {
      //     assets: true,
      //     chunks: true,
      //     modules: true,
      //   },
      // }),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'disabled', // disabled, static
      //   generateStatsFile: true,
      //   statsOptions: { source: true },
      //   statsFilename: 'web-build/stats.json',
      // }),
    ],
    optimization: {
      usedExports: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
        new CssMinimizerPlugin(),
      ],
    },
  })
}
