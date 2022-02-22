const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { configureSharedWebpack } = require('./webpack.shared');
const { IgnorePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
  const isDevelopment = false;

  return merge(
    {
      entry: './src/my-ui-core.ts',
      devtool: isDevelopment,
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
          name: '@my-ui/core',
          type: 'umd'
        },
        publicPath: '/'
      },
      resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
          'react/jsx-runtime': require.resolve('react/jsx-runtime'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        },
        fallback: {
          fs: false,
          tls: false,
          net: false,
          path: false,
          zlib: false,
          http: false,
          https: false,
          stream: false,
          crypto: false
        }
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          chunkFilename: '[id].[hash].css',
          filename: '[name].[hash].css'
        }),
        new IgnorePlugin({
          resourceRegExp: /node_modules/,
          contextRegExp: /node_modules/
        })
      ],
      externals: {
        react: 'react',
        'react-dom': 'react-dom'
      }
    },
    // All shared webpack configuration for app webpack configs
    configureSharedWebpack(isDevelopment)
  );
};
