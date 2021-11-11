import { withKnobs, text, number, optionsKnob } from '@storybook/addon-knobs';
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
      <Badge
        children={<NotificationIcon />}
        quantity={number('quantity', 7)}
        badgeSize={optionsKnob(
          'badgeSize',
          {
            medium: 'ms',
            small: 'ss'
          },
          'ms',
          {
            display: 'inline-radio'
          }
        )}
      />
    </>
  );
};
