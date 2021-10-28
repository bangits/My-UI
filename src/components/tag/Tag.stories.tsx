import { withKnobs } from '@storybook/addon-knobs';
import Tag from './Tag';

export default {
  component: Tag,
  decorators: [withKnobs],
  title: 'components/Tag/Tag'
};

export const Default = () => {
  return <Tag />;
};
