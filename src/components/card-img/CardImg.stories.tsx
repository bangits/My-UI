import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import CardImg from './CardImg';

export default {
  component: CardImg,
  decorators: [withKnobs],
  title: 'components/CardImg/CardImg'
};

export const Default = () => {
  return (
    <div style={{ maxWidth: '147px' }}>
      <CardImg
        title={text('title', 'Diamond Link')}
        image={text('image', 'https://wallpaperaccess.com/full/1765659.jpg')}
        handleClick={() => {
          alert('game was clicked');
        }}
      />
    </div>
  );
};
