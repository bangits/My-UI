import { withKnobs, text, number } from '@storybook/addon-knobs';
import Badge from './Badge';
import { NotificationIcon } from '@/icons';

export default {
  component: Badge,
  decorators: [withKnobs],
  title: 'components/Navigation/Badge'
};

export const Default = () => {
  return (
    <>
      <Badge icon={<NotificationIcon />} quantity={number('quantity', 7)} />
    </>
  );
};
