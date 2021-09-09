import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
  component: TextInput,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Text Input'
} as ComponentMeta<typeof TextInput>;

export const Default = () => (
  <TextInput
    disabled={boolean('Disabled', false)}
    placeholder='Default Input'
    defaultValue={text('Default Value', 'ui-kit@bangits.com')}
    type='text'
    onChange={action('onChange')}
    explanation={text('Explanation', 'Explanation')}
  />
);

//Input With Icons
export const WithIcons = () => (
  <>
    {/* Input With Left Icon */}
    <h2>Input With Left Icon</h2>
    <TextInput
      disabled={boolean('Disabled', false)}
      placeholder='Input With Left Icon'
      defaultValue={text('Default Value', 'ui-kit@bangits.com')}
      type='text'
      error={false}
      warning={false}
      success={false}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
      leftIcon={
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <g data-name='Group 134'>
            <path
              data-name='Path 1225'
              d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
              transform='translate(-527 -109)'
              style={{ stroke: '#7d86a9', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }}
            />
            <path data-name='Rectangle 687' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
          </g>
        </svg>
      }
    />

    {/* Input With Right Icon */}
    <h2>Input With Right Icon</h2>
    <TextInput
      disabled={boolean('Disabled', false)}
      placeholder='Input With Right Icon'
      defaultValue={text('Default Value', 'ui-kit@bangits.com')}
      type='text'
      error={false}
      warning={false}
      success={false}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
      rightIcon={
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

export const WithWarnings = () => (
  <>
    {/* Input With Error */}
    <h2 style={{ color: '#ff3434' }}>Input With Error</h2>
    <TextInput
      disabled={boolean('Disabled', false)}
      placeholder='Input With Error'
      defaultValue={text('Default Value', 'ui-kit@bangits.com')}
      type='text'
      error={true}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />

    {/* Input With Success */}
    <h2 style={{ color: '#53d86a' }}>Input With Success</h2>
    <TextInput
      disabled={boolean('Disabled', false)}
      placeholder='Input With Success'
      defaultValue={text('Default Value', 'ui-kit@bangits.com')}
      type='text'
      success={true}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />

    {/* Input With Warning */}
    <h2 style={{ color: '#ffcb2f' }}>Input With Warning</h2>
    <TextInput
      disabled={boolean('Disabled', false)}
      placeholder='Input With Warning'
      defaultValue={text('Default Value', 'ui-kit@bangits.com')}
      type='text'
      warning={true}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />
  </>
);
