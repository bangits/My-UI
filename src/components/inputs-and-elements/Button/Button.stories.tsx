import { COLOR_TYPES } from '@/types';
import { action } from '@storybook/addon-actions';
import { boolean, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Button from './Button';
import BUTTON_TYPES from './button-types';
import { getColorKnobs } from '@/configs';

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Button'
} as ComponentMeta<typeof Button>;

// Button Colors
export const Colors = () => (
  <>
    <Button
      type='button'
      color={getColorKnobs()}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.default, { display: 'inline-radio' })}
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}>
      {text('children', 'Primary')}
    </Button>
  </>
);

// Button Variants
export const Variants = () => (
  <>
    <Button
      type='button'
      color={getColorKnobs()}
      onClick={action('onClick')}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.ghost, { display: 'inline-radio' })}
      disabled={boolean('disabled', false)}>
      {text('children', 'Ghost')}
    </Button>
  </>
);

// Button With Icons
export const WithIcons = () => (
  <>
    <Button
      type='button'
      onClick={action('onClick')}
      color={getColorKnobs()}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.ghost, { display: 'inline-radio' })}
      disabled={boolean('disabled', false)}
      endIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' style={{ transform: 'rotate(180deg)' }}>
          <g data-name='Group 111'>
            <path
              data-name='Path 15'
              d='M552 123h-14m0 0 7 7m-7-7 7-7'
              transform='translate(-536 -114)'
              style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            />
            <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
          </g>
        </svg>
      }>
      {text('end icon', 'End Icon')}
    </Button>
    <h1> </h1>
    <Button
      type='button'
      color={getColorKnobs()}
      onClick={action('onClick')}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.ghost, { display: 'inline-radio' })}
      disabled={boolean('disabled', false)}
      startIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
          <g data-name='Group 111'>
            <path
              data-name='Path 15'
              d='M552 123h-14m0 0 7 7m-7-7 7-7'
              transform='translate(-536 -114)'
              style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            />
            <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
          </g>
        </svg>
      }>
      {text('start icon', 'Start Icon')}
    </Button>
  </>
);
