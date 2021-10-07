import { IconButtonRight } from '@/icons';
import { withKnobs } from '@storybook/addon-knobs';
import IconButton from './IconButton';

export default {
  component: IconButton,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Icon Button'
};

export const Default = () => {
  return <IconButton icon={<IconButtonRight />} />;
};
