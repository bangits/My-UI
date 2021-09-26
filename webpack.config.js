const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { configureSharedWebpack } = require('./webpack.shared');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    argv,
    orgName: 'atom',
    projectName: 'design-system',
    webpackConfigEnv
  });

  const isDevelopment = webpackConfigEnv.development;

  return merge(
    defaultConfig,
    {
      devServer: {
        port: webpackConfigEnv.PORT || 6005
      },

      plugins: [
        new MiniCssExtractPlugin({
          chunkFilename: '[id].[hash].css',
          filename: '[name].[hash].css'
        })
      ]
    },
    // All shared webpack configuration for storybook webpack and app webpack configs
    configureSharedWebpack(isDevelopment)
  );
};
