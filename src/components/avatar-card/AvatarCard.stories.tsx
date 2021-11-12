import { number, withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import React from 'react';
import AvatarCard from './AvatarCard';

export default {
  component: AvatarCard,
  decorators: [withKnobs],
  title: 'components/AvatarCard/AvatarCard'
};

export const Default = () => {
  return (
    <AvatarCard
      imageSize={optionsKnob(
        'imageSize',
        {
          medium: 'md',
          small: 'sm'
        },
        'md',
        {
          display: 'inline-radio'
        }
      )}
      avatarImg={text('avatarImg', 'https://avatars.design/wp-content/uploads/2016/09/28_GIF.gif')}
      variant={optionsKnob(
        'variant',
        {
          online: 'online',
          offline: 'offline',
          default: 'default'
        },
        'online',
        {
          display: 'inline-radio'
        }
      )}
    />
  );
};
