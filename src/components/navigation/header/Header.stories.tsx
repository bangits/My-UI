import { withKnobs } from '@storybook/addon-knobs';
import Header from './Header';

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'components/Navigation/Header'
};

export const Default = () => {
  return <Header />;
};
