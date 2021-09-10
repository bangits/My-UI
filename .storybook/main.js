const { configureSass, configureWatchOptions, configureAliases } = require('../webpack.shared');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
    }
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    'storybook-addon-themes',
    'storybook-addon-turbo-build'
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules = [...config.module.rules, ...configureSass()];
    config.resolve = {
      ...config.resolve,
      alias: configureAliases()
    };

    config.watchOptions = configureWatchOptions();

    return config;
  }
};
