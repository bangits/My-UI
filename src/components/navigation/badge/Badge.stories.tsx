import { withKnobs } from '@storybook/addon-knobs';
import Badge from './Badge';

export default {
  component: Badge,
  decorators: [withKnobs],
  title: 'components/Navigation/Badge'
};

export const Default = () => {
  return <Badge />;
};
