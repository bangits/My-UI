const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// Configurations for sass, which also include global sass file parsing
const configureSass = (isDevelopment = true) => [
  {
    test: /\.module\.s(a|c)ss$/,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: isDevelopment
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDevelopment
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, './src/sass/main.scss')
        }
      }
    ]
  },
  {
    test: /\.s(a|c)ss$/,
    exclude: /\.module.(s(a|c)ss)$/,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDevelopment
        }
      }
    ]
  }
];

const configureWatchOptions = () => ({
  aggregateTimeout: 500, // Delay before reloading
  poll: 1000, // Enable polling since fsevents are not supported in docker
  ignored: /node_modules/
});

// Aliases used for simplification imports
const configureAliases = () => ({
  '@': path.resolve(__dirname, './src'),
  '@atoms': path.resolve(__dirname, './src/components/atoms')
});

const configureSharedWebpack = (isDevelopment) => ({
  module: {
    rules: configureSass(isDevelopment)
  },
  watchOptions: configureWatchOptions(),
  resolve: {
    alias: configureAliases()
  }
});

module.exports = {
  configureSharedWebpack,
  configureAliases,
  configureWatchOptions,
  configureSass
};