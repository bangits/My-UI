import { number, withKnobs, text } from '@storybook/addon-knobs';
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
      imageSize={text('imageSize', 'md')}
      avatarImg={text('avatarImg', 'https://avatars.design/wp-content/uploads/2016/09/28_GIF.gif')}
    />
  );
};
