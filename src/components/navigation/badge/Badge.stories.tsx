import { withKnobs, text, number, optionsKnob } from '@storybook/addon-knobs';
import Badge from './Badge';
import { NotificationIcon, NotificationIconRotated } from '@/icons';
import { getColorKnobs } from '@/configs';
import { useState } from 'React';

export default {
  component: Badge,
  decorators: [withKnobs],
  title: 'components/Navigation/Badge'
};

export const Default = () => {
  return (
    <>
      <Badge
        children={<NotificationIconRotated width='16' style={{ fill: '#95abc5' }} />}
        quantity={number('quantity', 7)}
        maxNumber={number('maxNumber', 100)}
        color={getColorKnobs()}
        // badgeSize={optionsKnob(
        //   'badgeSize',
        //   {
        //     medium: 'ms',
        //     small: 'ss'
        //   },
        //   'ms',
        //   {
        //     display: 'inline-radio'
        //   }
        // )}
      />
    </>
  );
};
