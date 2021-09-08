import { action } from '@storybook/addon-actions';
import { boolean, optionsKnob, text, withKnobs, color } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Button from './Button';
import BUTTON_TYPES from './button-types';

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Button'
} as ComponentMeta<typeof Button>;

export const Default = () => (
  <Button
    color='primary'
    component='button'
    onClick={action('onClick')}
    variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.default, { display: 'inline-radio' })}
    disabled={boolean('Disabled', false)}>
    {text('children', 'Ghost')}
  </Button>
);

export const Ghost = () => (
  <Button
    component='button'
    color={{ color: color('Color', 'red') }}
    onClick={action('onClick')}
    variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.ghost, { display: 'inline-radio' })}
    disabled={boolean('Disabled', false)}>
    {text('children', 'Primary')}
  </Button>
);
