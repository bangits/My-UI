import { getColorKnobs } from '@/configs';
import { COLOR_TYPES } from '@/types';
import { action } from '@storybook/addon-actions';
import { boolean, number, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { useEffect, useState } from 'react';
import TextInput from './TextInput';

export default {
  component: TextInput,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Text Input'
} as ComponentMeta<typeof TextInput>;

export const Default = () => {
  const [value, setValue] = useState('ads');

  useEffect(() => {
    setTimeout(() => {
      setValue('');
    }, 2000);
  }, []);

  return (
    <>
      <TextInput
        disabled={boolean('disabled', false)}
        // label={text('label', 'Default Text Input')}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={number('maxLength', 10)}
        type='text'
        explanation={text('explanation', '')}
        fullWidth={boolean('fullWidth', false)}
        color={getColorKnobs()}
      />

      <h1> </h1>

      <TextInput
        color={getColorKnobs()}
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
};

//Input With Icons
export const WithIcons = () => {
  const [value, setValue] = useState('');

  const copyInputText = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <>
      <TextInput
        color={optionsKnob('textInputColor', COLOR_TYPES, COLOR_TYPES.PRIMARY, {
          display: 'inline-radio'
        })}
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
                style={{ fill: 'none', stroke: '#7d86a9', strokeLinecap: 'round', strokeLinejoin: 'round' }}
              />
              <path data-name='Rectangle 687' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
            </g>
          </svg>
        }
        endIcon={[
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
        ]}
      />

      <h1> </h1>

      <TextInput
        color={optionsKnob('textInputColor', COLOR_TYPES, COLOR_TYPES.PRIMARY, {
          display: 'inline-radio'
        })}
        disabled={boolean('disabled', false)}
        label='Input With End Icon'
        defaultValue={text('defaultValue for end icon', 'Input With End Icon')}
        type='text'
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

      <h1></h1>

      <TextInput
        color={optionsKnob('textInputColor', COLOR_TYPES, COLOR_TYPES.PRIMARY, {
          display: 'inline-radio'
        })}
        disabled={boolean('disabled', false)}
        label='Input With Start Icon'
        type='text'
        onChange={(e) => setValue(e.target.value)}
        value={value}
        explanation={text('explanation', 'Explanation')}
        endIcon={[
          <svg
            style={{ cursor: 'pointer' }}
            onClick={() => copyInputText(value)}
            id='content_copy_black_24dp'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'>
            <path id='Path_43188' data-name='Path 43188' d='M0,0H24V24H0Z' fill='none' />
            <path
              id='Path_43189'
              data-name='Path 43189'
              d='M13.789,1H3.684A1.689,1.689,0,0,0,2,2.684V14.474H3.684V2.684H13.789Zm2.526,3.368H7.053A1.689,1.689,0,0,0,5.368,6.053V17.842a1.689,1.689,0,0,0,1.684,1.684h9.263A1.689,1.689,0,0,0,18,17.842V6.053A1.689,1.689,0,0,0,16.316,4.368Zm0,13.474H7.053V6.053h9.263Z'
              transform='translate(2 1.737)'
              fill='currentColor'
            />
          </svg>,

          <svg
            style={{ cursor: 'pointer' }}
            onClick={() => setValue(`AD${(Math.random() * 1000000).toFixed(0)}DC`)}
            id='published_with_changes_black_24dp'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'>
            <rect id='Rectangle_11042' data-name='Rectangle 11042' width='24' height='24' fill='none' />
            <path
              id='Path_43187'
              data-name='Path 43187'
              d='M16.94,17.834H19.1v1.809H13.7V14.216h1.8v2.469A7.232,7.232,0,0,0,11.9,3.877V2.05a9.05,9.05,0,0,1,5.04,15.784ZM3.8,11.05A7.206,7.206,0,0,1,6.5,5.415V7.884H8.3V2.457H2.9V4.266H5.06A9.05,9.05,0,0,0,10.1,20.05V18.223A7.228,7.228,0,0,1,3.8,11.05Z'
              transform='translate(1 0.95)'
              fill='currentColor'
            />
          </svg>
        ]}
      />

      <h1></h1>

      <TextInput
        color={optionsKnob('textInputColor', COLOR_TYPES, COLOR_TYPES.PRIMARY, {
          display: 'inline-radio'
        })}
        disabled={boolean('disabled', false)}
        label='Input With Start Icon'
        defaultValue={text('defaultValue for start icon', 'Input With Start Icon')}
        type='text'
        onChange={action('onChange')}
        explanation={text('explanation', 'Explanation')}
        startIcon={[
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
          </svg>,
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
        ]}
        endIcon={[
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
        ]}
      />
    </>
  );
};

export const WithStates = () => (
  <>
    <TextInput
      color={optionsKnob('textInputColorDanger', COLOR_TYPES, COLOR_TYPES.DANGER, {
        display: 'inline-radio'
      })}
      disabled={boolean('disabled', false)}
      label='Input With Error'
      defaultValue={text('defaultValue for error', 'error@bangits.com')}
      type='text'
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />

    <h1> </h1>

    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With Success'
      defaultValue={text('defaultValue for success', 'success@bangits.com')}
      type='text'
      color={optionsKnob('textInputColorSuccess', COLOR_TYPES, COLOR_TYPES.SUCCESS, {
        display: 'inline-radio'
      })}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />

    <h1> </h1>

    <TextInput
      disabled={boolean('disabled', false)}
      label='Input With Warning'
      defaultValue={text('defaultValue for warning', 'warning@bangits.com')}
      type='text'
      color={optionsKnob('textInputColorWarning', COLOR_TYPES, COLOR_TYPES.WARNING, {
        display: 'inline-radio'
      })}
      onChange={action('onChange')}
      explanation={text('Explanation', 'Explanation')}
    />
  </>
);
