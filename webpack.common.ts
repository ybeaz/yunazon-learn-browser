/* eslint-disable @typescript-eslint/no-var-requires */
// 'use strict';

/*  NodeJS server with express.js
  cd c:/Data/Dev/UserTo/r1.userto.com/
  node server.js
  localhost:3000/demo-js-redux-example.html
*/

import webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import path from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'

export const common = {
  entry: {
    bundle: ['./src/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: [
                        'last 2 Chrome versions',
                        'last 2 Firefox versions',
                        'last 2 Safari versions',
                        'last 2 Edge versions',
                        'ie >= 11',
                      ],
                    },
                    useBuiltIns: 'usage',
                    corejs: 2,
                  },
                ],
                '@babel/preset-react',
                '@babel/typescript',
              ],
              plugins: [
                ['babel-plugin-transform-require-ignore', {}],
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['file-loader?name=assets/[name].[ext]'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        exclude: /node_modules/,
        use: [
          'url-loader?limit=10000',
          'img-loader',
          'file-loader?name=[name].[ext]?[hash]',
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?limit=10000&mimetype=application/font-woff'],
      },
      {
        test: /\.otf(\?.*)?$/,
        use: [
          'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf',
        ],
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: 'Yunazon-learn',
      excludeWarning: true,
      alwaysNotify: true,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      'react-dom': 'ReactDOM',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [],
    }),
  ],
  performance: {
    hints: false,
  },
  watch: false,
  target: 'web',
  externals: [{ pg: true }],
  node: { fs: 'empty' },
  optimization: {
    nodeEnv: 'production',
    flagIncludedChunks: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
  },
  cache: {
    type: 'memory',
  },
}
