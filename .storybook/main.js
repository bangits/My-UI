const { configureSass, configureWatchOptions, configureAliases, configureAssets } = require('../webpack.shared');

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
    // Removing svg from rules
    config.module.rules = config.module.rules.map((rule) => {
      if (
        String(rule.test) ===
        String(/\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        };
      }

      return rule;
    });

    config.module.rules = [...config.module.rules, ...configureAssets(), ...configureSass()];
    config.resolve = {
      ...config.resolve,
      alias: configureAliases()
    };

    config.watchOptions = configureWatchOptions();

    return config;
  }
};
