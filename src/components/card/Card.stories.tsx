import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Card from './Card';

export default {
  component: Card,
  decorators: [withKnobs],
  title: 'components/Card/Card'
};

export const Default = () => {
  return (
    <Card component='div' borderRadius={number('borderRadius', 2.6)}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Card>
  );
};
