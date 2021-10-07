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
      label={text('label', 'Default Text Input')}
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
      error={false}
      warning={false}
      success={false}
      onChange={action('onChange')}
      explanation={text('explanation', 'Explanation')}
      startIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <g data-name='Group 134'>
            <path
              data-name='Path 1225'
              d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
              transform='translate(-527 -109)'
              style={{ fill: 'none', stroke: '#7d86a9', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            />
            <path data-name='Rectangle 687' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
          </g>
        </svg>
      }
      endIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <g data-name='Group 134'>
            <path
              data-name='Path 1225'
              d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
              transform='translate(-527 -109)'
              style={{ fill: 'none', stroke: '#7d86a9', strokeLinecap: 'round', strokeLinejoin: 'round' }}
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
      error={false}
      warning={false}
      success={false}
      onChange={action('onChange')}
      explanation={text('explanation', 'Explanation')}
      endIcon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          className='bi bi-eye-slash'
          viewBox='0 0 16 16'>
          <path d='M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z' />
          <path d='M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z' />
          <path d='M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z' />
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
      error={true}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />

    <h1> </h1>

    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With Success'
      defaultValue={text('defaultValue for success', 'success@bangits.com')}
      type='text'
      success={true}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />

    <h1> </h1>

    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With Warning'
      defaultValue={text('defaultValue for warning', 'warning@bangits.com')}
      type='text'
      warning={true}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />
  </>
);
