const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'atom',
    projectName: 'design-system',
    webpackConfigEnv,
    argv
  });

  const isDevelopment = webpackConfigEnv.development;

  return merge(defaultConfig, {
    devServer: {
      port: webpackConfigEnv.PORT || 6005
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css'
      })
    ]
  });
};
