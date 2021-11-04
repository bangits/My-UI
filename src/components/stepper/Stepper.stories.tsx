import { Button, Card } from '@/my-ui-core';
import { object, withKnobs } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Stepper from './Stepper';

export default {
  component: Stepper,
  decorators: [withKnobs],
  title: 'components/Stepper/Stepper'
};

export const Default = () => {
  const [value, setValue] = useState(1);

  return (
    <Card borderRadius={1.6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 81 }}>
      <Button style={{ display: value < 2 ? 'none' : '' }} variant='ghost' onClick={() => setValue(value - 1)}>
        Previous
      </Button>
      <div style={{ width: 582 }}>
        <Stepper
          value={value}
          steps={object('steps', [
            {
              title: 'GAME INFORMATION',
              value: 1
            },
            {
              title: 'GAME PROPERTIES',
              value: 2
            },
            {
              title: 'OTHER DETAILS',
              value: 3
            }
          ])}
        />
      </div>
      <Button disabled={value > 2} variant='ghost' onClick={() => setValue(value + 1)}>
        Next
      </Button>
      <Button style={{ marginLeft: 10 }} onClick={() => setValue(1)}>
        Reset
      </Button>
    </Card>
  );
};
