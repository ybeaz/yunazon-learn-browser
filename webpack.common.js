const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const webpack = require('webpack')

// css/css module 正则表达式
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
// sass/sass module 正则表达式
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/
// less/less module 正则表达式
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/
// stylus/stylus module 正则表达式
const stylRegex = /\.styl$/
const stylModuleRegex = /\.module\.styl$/

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      index: './src/index.tsx',
    },
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'web-build/'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './build/index.html',
      }),
      new WebpackBar(),
      /* Removed since it prevented Axios to run from outer source
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      */
    ],
    resolve: {
      extensions: ['.tsx', '.jsx', '.ts', '.js', '.json', '.wasm'],
      alias: {
        '@abs': path.resolve(__dirname, './src'),
        '@communication': path.resolve(
          __dirname,
          '../yourails_communication_layer'
        ),
      },
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js|ts|tsx)?$/,
          use: ['thread-loader', 'swc-loader'],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: cssRegex,
          exclude: cssModuleRegex,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: cssModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: sassModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: stylRegex,
          exclude: stylModuleRegex,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'stylus-loader',
          ],
        },
        {
          test: stylModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
            'stylus-loader',
          ],
        },
        {
          test: lessRegex,
          exclude: lessModuleRegex,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
          sideEffects: true,
        },
        {
          test: lessModuleRegex,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'postcss-loader',
            'less-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
  }
}
