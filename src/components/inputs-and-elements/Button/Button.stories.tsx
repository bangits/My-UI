import { COLOR_TYPES } from '@/types';
import { action } from '@storybook/addon-actions';
import { boolean, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Button from './Button';
import BUTTON_TYPES from './button-types';
import { getColorKnobs } from '@/configs';
import { EditIcon } from '@/icons';

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
        <svg xmlns='http://www.w3.org/2000/svg' width='1.6rem' viewBox='0 0 10 10' fill='currentColor'>
          <path d='M5 10c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l3.6-3.6H.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.8L4.6 1c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l4.5 4.5.1.1v.4c0 .1-.1.1-.1.1L5.3 9.9s-.2.1-.3.1z' />
        </svg>

        // <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' style={{ transform: 'rotate(180deg)' }}>
        //   <g data-name='Group 111'>
        //     <path
        //       data-name='Path 15'
        //       d='M552 123h-14m0 0 7 7m-7-7 7-7'
        //       transform='translate(-536 -114)'
        //       style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
        //     />
        //     <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
        //   </g>
        // </svg>
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
        <>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8.1 8.1' width='1.6rem' fill='currentColor'>
            <path d='M4 8.1s-.1 0-.2-.1L.1 4.3 0 4.2V4s0-.1.1-.1L3.8.2c.1-.2.4-.2.5-.1s.1.4 0 .5l-3 3.1h6.5c.2 0 .4.2.4.4s-.3.3-.5.3H1.3l3.1 3.1c.1.1.1.4 0 .5-.2.1-.3.1-.4.1z' />
          </svg>

          {/* <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
          <g data-name='Group 111'>
            <path
              data-name='Path 15'
              d='M552 123h-14m0 0 7 7m-7-7 7-7'
              transform='translate(-536 -114)'
              style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            />
            <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
          </g>
        </svg> */}
        </>
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
        <>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13.1 12.8' width='1.6rem' fill='currentColor'>
            <path d='M8.3 2.1c-.1-.1-.3-.2-.4-.2-.1 0-.2.1-.3.1L1 8.7c-.1 0-.2.2-.2.3L0 11.9c-.1.4.1.8.6.9H1l2.9-.7c.1 0 .3-.1.4-.2l6.6-6.6c.2-.2.2-.5 0-.7L8.3 2.1zm-4.7 9.1-2.5.6.6-2.5 6.2-6.2L9.8 5l-6.2 6.2z' />
            <path d='M12.5 1.2c0-.1 0-.1 0 0l-.7-.7c-.7-.7-1.8-.7-2.5 0l-1 .8c-.1.1-.2.2-.2.4s.1.2.2.3l2.6 2.6c.1.1.2.1.4.1s.3 0 .4-.1l.9-.9c.6-.7.6-1.8-.1-2.5zM11.8 3l-.5.5-1.9-1.8.5-.5c.3-.3.8-.3 1.1 0l.8.7c.3.3.3.8 0 1.1z' />
          </svg>

          {/* <svg data-name='Component 61 – 1' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
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
          </svg> */}
        </>
      }>
      {text('Edit', 'Edit')}
    </Button>
    <h1></h1>
    <Button
      type='button'
      color={getColorKnobs()}
      onClick={action('onClick')}
      variant={optionsKnob('variant', BUTTON_TYPES, BUTTON_TYPES.link, { display: 'inline-radio' })}
      disabled={boolean('disabled', false)}
      startIcon={
        <>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8.1 8.1' width='1.6rem' fill='currentColor'>
            <path d='M4 8.1s-.1 0-.2-.1L.1 4.3 0 4.2V4s0-.1.1-.1L3.8.2c.1-.2.4-.2.5-.1s.1.4 0 .5l-3 3.1h6.5c.2 0 .4.2.4.4s-.3.3-.5.3H1.3l3.1 3.1c.1.1.1.4 0 .5-.2.1-.3.1-.4.1z' />
          </svg>

          {/* <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
            <g data-name='Group 111'>
              <path
                data-name='Path 15'
                d='M552 123h-14m0 0 7 7m-7-7 7-7'
                transform='translate(-536 -114)'
                style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
              />
              <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
            </g>
          </svg> */}
        </>
      }>
      {text('start icon', 'Start Icon')}
    </Button>
  </>

  //remove  h1
);
