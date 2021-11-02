import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import CardImg from './CardImg';
import styles from './CardImg.module.scss';

export default {
  component: CardImg,
  decorators: [withKnobs],
  title: 'components/CardImg/CardImg'
};

export const Default = () => {
  return (
    <div style={{ maxWidth: '98px' }}>
      <CardImg />
    </div>
  );
};
