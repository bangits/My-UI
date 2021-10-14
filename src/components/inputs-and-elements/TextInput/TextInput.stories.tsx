import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
  component: TextInput,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Text Input'
} as ComponentMeta<typeof TextInput>;

export const Default = () => (
  <>
    <TextInput
      disabled={boolean('disabled', false)}
      // label={text('label', 'Default Text Input')}
      defaultValue={text('defaultValue', undefined)}
      value={text('defaultValue', 'ui-kit@bangits.com')}
      maxLength={number('maxLength', 10)}
      type='text'
      onChange={action('onChange')}
      explanation={text('explanation', '')}
      fullWidth={boolean('fullWidth', false)}
    />

    <h1> </h1>

    <TextInput
      disabled={boolean('disabled', false)}
      label={text('label for number input', 'Default Number Input')}
      defaultValue={text('defaultValue', undefined)}
      value={text('defaultValue', 'ui-kit@bangits.com')}
      maxLength={number('maxLength', 10)}
      type='number'
      onChange={action('onChange')}
      explanation={text('explanation', '')}
      fullWidth={boolean('fullWidth for number input', false)}
    />
  </>
);

//Input With Icons
export const WithIcons = () => (
  <>
    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With Start Icon'
      defaultValue={text('defaultValue for start icon', 'Input With Start Icon')}
      type='text'
      onChange={action('onChange')}
      explanation={text('explanation', 'Explanation')}
      startIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <g data-name='Group 134'>
            <path
              data-name='Path 1225'
              d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
              transform='translate(-527 -109)'
              style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            />
            <path data-name='Rectangle 687' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
          </g>
        </svg>
      }
    />

    <h1> </h1>

    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With End Icon'
      defaultValue={text('defaultValue for end icon', 'Input With End Icon')}
      type='text'
      onChange={action('onChange')}
      explanation={text('explanation', 'Explanation')}
      endIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <g data-name='Group 134'>
            <path
              data-name='Path 1225'
              d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
              transform='translate(-527 -109)'
              style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            />
            <path data-name='Rectangle 687' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
          </g>
        </svg>
      }
    />
  </>
);

export const WithStates = () => (
  <>
    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With Error'
      defaultValue={text('defaultValue for error', 'error@bangits.com')}
      type='text'
      color={'danger'}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />

    <h1> </h1>

    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With Success'
      defaultValue={text('defaultValue for success', 'success@bangits.com')}
      type='text'
      color={'success'}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />

    <h1> </h1>

    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With Warning'
      defaultValue={text('defaultValue for warning', 'warning@bangits.com')}
      type='text'
      color={'warning'}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />
  </>
);
