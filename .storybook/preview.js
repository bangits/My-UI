import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  themes: [
    // This configuration includes theming in design system
    { name: 'default', class: '', color: '#fff', default: true },
    { name: 'dark', class: 'theme-dark', color: '#000' }
  ]
};
