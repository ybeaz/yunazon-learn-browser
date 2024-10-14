const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// css/css module
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
// sass/sass module
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/
// less/less module
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/
// stylus/stylus module
const stylRegex = /\.styl$/
const stylModuleRegex = /\.module\.styl$/

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      index: './src/index.tsx',
    },
    target: 'web',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './build/index.html',
      }),
      new WebpackBar(),
      new webpack.ProgressPlugin(),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'disabled',
      //   generateStatsFile: true,
      //   statsOptions: { source: false },
      // }),
      /* Need to research configuration, pro/cons
      new webpack.DllReferencePlugin({
        context: __dirname,
        // manifest: require('./manifest.json'),
        scope: 'xyz',
        sourceType: 'commonjs2',
      }),
      */
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
        yourails_common: path.resolve(__dirname, 'node_modules/yourails_common'),

        // '@communication': path.resolve(__dirname, '../yourails_communication_layer'),
      },
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
      },
    },
    externals: [
      'stream',
      'child_process',
      'ncp',
      'fs',
      'os',
      'cluster',
      'js-sha3',
      '@noble/hashes/sha3',
      '@noble/hashes/utils',
      'buffer',
      'crypto',
      'yarg',
      'yarg-parse',
    ],
    module: {
      rules: [
        // {
        //   test: /\.(js|jsx|ts|tsx)$/,
        //   exclude: /node_modules/,
        //   // exclude: /node_modules\/(?!yourails_view_layer_web)/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        //     },
        //   },
        //   include: [
        //     path.resolve(__dirname, 'src'),
        //     // path.resolve(__dirname, 'node_modules/yourails_view_layer_web'),
        //   ],
        // },
        {
          test: /\.(jsx|js|ts|tsx)?$/, // You already have this rule
          use: [
            'thread-loader',
            {
              loader: 'swc-loader',
              options: {
                jsc: {
                  parser: {
                    syntax: 'typescript', // If you're using TypeScript
                    tsx: true, // Enable JSX parsing in TypeScript
                    jsx: true, // For regular JSX files
                  },
                  transform: {
                    react: {
                      pragma: 'React.createElement', // Defaults to React
                      pragmaFrag: 'React.Fragment',
                      throwIfNamespace: false, // React namespace handling
                      development: process.env.NODE_ENV === 'development',
                      useBuiltins: true, // Optimizes React usage
                    },
                  },
                },
              },
            },
          ],
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules/yourails_common'),
            path.resolve(__dirname, '.yalc/yourails_common'),
          ], // Make sure it includes your source folder
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
          use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader'],
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
