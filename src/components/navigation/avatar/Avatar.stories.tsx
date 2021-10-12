import { withKnobs } from '@storybook/addon-knobs';
import Avatar from './Avatar';

export default {
  component: Avatar,
  decorators: [withKnobs],
  title: 'components/Navigation/Avatar'
};

export const Default = () => {
  return <Avatar />;
};
