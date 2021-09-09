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

//Button Colors
export const Colors = () => (
  <>
    <h2>Primary Color</h2>
    <Button
      type='button'
      color='primary'
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.default, { display: 'inline-radio' })}
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}>
      {text('children', 'Primary')}
    </Button>
  </>
);

//Button Variants
export const Variants = () => (
  <>
    <h2>Button Ghost</h2>
    <Button
      type='button'
      onClick={action('onClick')}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.ghost, { display: 'inline-radio' })}
      disabled={boolean('disabled', false)}>
      {text('children', 'Ghost')}
    </Button>
  </>
);

//Button With Icons

export const WithIcons = () => (
  <>
    <h2>Button / Ghost / Right Icon</h2>

    <Button
      type='button'
      onClick={action('onClick')}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.ghost, { display: 'inline-radio' })}
      disabled={boolean('disabled', false)}
      rightIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
          <g data-name='Group 111'>
            <path
              data-name='Path 15'
              d='M552 123h-14m0 0 7 7m-7-7 7-7'
              transform='translate(-536 -114)'
              style={{ stroke: '#999', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }}
            />
            <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
          </g>
        </svg>
      }>
      {text('children', 'Ghost')}
    </Button>

    <h2>Button / Ghost / Left Icon</h2>

    <Button
      type='button'
      onClick={action('onClick')}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.ghost, { display: 'inline-radio' })}
      disabled={boolean('disabled', false)}
      leftIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
          <g data-name='Group 111'>
            <path
              data-name='Path 15'
              d='M552 123h-14m0 0 7 7m-7-7 7-7'
              transform='translate(-536 -114)'
              style={{ stroke: '#999', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }}
            />
            <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
          </g>
        </svg>
      }>
      {text('children', 'Ghost')}
    </Button>
  </>
);
