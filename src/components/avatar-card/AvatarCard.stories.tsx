import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import AvatarCard from './AvatarCard';

export default {
  component: AvatarCard,
  decorators: [withKnobs],
  title: 'components/AvatarCard/AvatarCard'
};

export const Default = () => {
  return <AvatarCard></AvatarCard>;
};
