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
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style={{ transform: 'rotate(180deg)' }}>
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
    <h1></h1>
    <Button
      type='button'
      color={getColorKnobs()}
      onClick={action('onClick')}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.ghost, { display: 'inline-radio' })}
      disabled={boolean('disabled', false)}
      startIcon={
        <svg data-name='Component 61 – 1' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <path data-name='Rectangle 919' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
          <g transform='translate(6.001 5.754)'>
            <path
              data-name='Path 1944'
              style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
              d='m7.41 82.473-6.6 6.6a.263.263 0 0 0-.069.121l-.734 2.94a.26.26 0 0 0 .252.323.258.258 0 0 0 .063-.008l2.937-.732a.26.26 0 0 0 .121-.069l6.6-6.6zm0 0'
              transform='translate(0 -80.223)'
            />
            <path
              data-name='Path 1945'
              style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
              d='m337.8 1.35-.735-.735a1.331 1.331 0 0 0-1.838 0l-.9.9 2.573 2.573.9-.9a1.3 1.3 0 0 0 0-1.838zm0 0'
              transform='translate(-326.182)'
            />
          </g>
        </svg>
      }>
      {text('Edit', 'Edit')}
    </Button>
  </>
);
