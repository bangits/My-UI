import { Card } from '@/my-ui-core';
import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Stepper from './Stepper';

export default {
  component: Stepper,
  decorators: [withKnobs],
  title: 'components/Stepper/Stepper'
};

export const Default = () => {
  return (
    <Card borderRadius={1.6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 81 }}>
      <div style={{ width: 582 }}>
        <Stepper />
      </div>
    </Card>
  );
};
