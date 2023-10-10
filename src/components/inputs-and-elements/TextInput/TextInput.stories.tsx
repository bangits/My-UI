import { getColorKnobs } from '@/configs';
import { COLOR_TYPES } from '@/types';
import { action } from '@storybook/addon-actions';
import { boolean, number, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import TextInput from './TextInput';

export default {
  component: TextInput,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Text Input'
} as ComponentMeta<typeof TextInput>;

export const Default = () => {
  const [value, setValue] = useState(
    'ahfoashfoklahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjls;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjlsahfoashfokl;sajhfklsffjls'
  );

  return (
    <>
      <TextInput
        color='danger'
        value={value}
        disabled={true}
        label='Default Text Input'
        onChange={(e) => setValue(e.target.value)}
        maxLength={number('maxLength', 500)}
        type='text'
        explanation={text('explanation', '')}
        fullWidth={boolean('fullWidth', false)}
        textarea={boolean('textarea', true)}
        // color={getColorKnobs()}
      />

      <h1> </h1>

      <TextInput
        disabled={boolean('disabled', false)}
        label={text('label for number input', 'Default Number Input')}
        defaultValue={text('defaultValue', undefined)}
        value={text('defaultValue', 'ui-kit@bangits.com')}
        maxLength={number('maxLength', 10)}
        type='number'
        isDecimal
        showExplanationAsTooltip
        endIcon={<div>sd</div>}
        onlyPositive
        onChange={action('onChange')}
        explanation={text('explanation', '')}
        fullWidth={boolean('fullWidth for number input', false)}
        min={-Infinity}
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
        startIcon={[
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.25rem'
            viewBox='0 0 13.5 15'
            fill='currentColor'
            style={{ transform: 'translate(4px, 2px)' }}>
            <path d='M13 15c-.3 0-.5-.2-.5-.5v-1.6c0-1.4-1.2-2.6-2.6-2.6H3.6c-1.4 0-2.6 1.2-2.6 2.6v1.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1.6c0-2 1.6-3.6 3.6-3.6h6.2c2 0 3.6 1.6 3.6 3.6v1.6c.1.3-.1.5-.4.5zM6.7 7.2c-2 0-3.6-1.6-3.6-3.6S4.7 0 6.7 0c1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1 2.6c-.8.6-1.7.9-2.7.9.1 0 .1 0 0 0zM6.8 1C5.3 1 4.1 2.2 4.1 3.6c0 1.4 1.2 2.6 2.6 2.6.7 0 1.4-.3 1.9-.8.5-.4.8-1.1.8-1.8s-.3-1.4-.8-1.8C8.1 1.3 7.5 1 6.8 1z' />
          </svg>
        ]}
        endIcon={[
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.25rem'
            viewBox='0 0 13.5 15'
            fill='currentColor'
            style={{ transform: 'translate(-4px, 2px)' }}>
            <path d='M13 15c-.3 0-.5-.2-.5-.5v-1.6c0-1.4-1.2-2.6-2.6-2.6H3.6c-1.4 0-2.6 1.2-2.6 2.6v1.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1.6c0-2 1.6-3.6 3.6-3.6h6.2c2 0 3.6 1.6 3.6 3.6v1.6c.1.3-.1.5-.4.5zM6.7 7.2c-2 0-3.6-1.6-3.6-3.6S4.7 0 6.7 0c1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1 2.6c-.8.6-1.7.9-2.7.9.1 0 .1 0 0 0zM6.8 1C5.3 1 4.1 2.2 4.1 3.6c0 1.4 1.2 2.6 2.6 2.6.7 0 1.4-.3 1.9-.8.5-.4.8-1.1.8-1.8s-.3-1.4-.8-1.8C8.1 1.3 7.5 1 6.8 1z' />
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
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.4rem'
              viewBox='0 0 24 19.1'
              fill='currentColor'
              style={{ transform: 'translate(1px,0)' }}>
              <path d='M20 14.4c2.6-2.3 4-4.9 4-4.9s-4.5-8.2-12-8.2c-1.4 0-2.9.3-4.2.9L9 3.3c1-.4 2-.5 3-.5 3.2 0 5.8 1.8 7.8 3.7.9.9 1.8 2 2.5 3.1-.1.1-.2.3-.3.4-.5.7-1.2 1.7-2.2 2.6-.2.2-.5.5-.8.7l1 1.1z' />
              <path d='M16.9 11.3c1-2.7-.4-5.7-3.2-6.7-1.1-.4-2.4-.4-3.5 0l1.2 1.2c2.1-.3 4 1.1 4.2 3.2.1.4.1.7 0 1.1.1 0 1.3 1.2 1.3 1.2zm-4.4 1.9 1.2 1.2C11 15.5 8 14 7.1 11.3c-.4-1.1-.4-2.4 0-3.5L8.3 9c-.3 2.1 1.1 4 3.2 4.2.3.1.7.1 1 0z' />
              <path d='M5 5.7c-.2.3-.5.5-.8.8-.9.9-1.8 2-2.5 3.1l.4.4c.5.7 1.2 1.7 2.2 2.6 1.9 1.9 4.6 3.7 7.8 3.7 1.1 0 2.1-.2 3-.5l1.2 1.2c-1.3.6-2.7.9-4.2.9-7.5 0-12-8.2-12-8.2s1.4-2.6 4-4.9l.9.9zm15.5 13.4-18-18 1-1.1 18 18-1 1.1z' />
            </svg>

            {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            className='bi bi-eye-slash'
            viewBox='0 0 16 16'>
            <path d='M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z' />
            <path d='M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z' />
            <path d='M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z' />
          </svg> */}
          </>
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
            onClick={() => copyInputText(value)}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 18.5'
            width='16'
            style={{ cursor: 'pointer' }}
            fill='currentColor'>
            <path d='M11.8 0H1.7C.8 0 0 .8 0 1.7v11.8h1.7V1.7h10.1V0zm2.5 3.4H5.1c-.9 0-1.7.8-1.7 1.7v11.8c0 .9.8 1.7 1.7 1.7h9.3c.9 0 1.7-.8 1.7-1.7V5.1c-.1-1-.9-1.7-1.8-1.7zm0 13.4H5.1V5.1h9.3l-.1 11.7z' />
          </svg>,

          // <svg
          //   style={{ cursor: 'pointer' }}
          //   onClick={() => copyInputText(value)}
          //   id='content_copy_black_24dp'
          //   xmlns='http://www.w3.org/2000/svg'
          //   width='24'
          //   height='24'
          //   viewBox='0 0 24 24'>
          //   <path id='Path_43188' data-name='Path 43188' d='M0,0H24V24H0Z' fill='none' />
          //   <path
          //     id='Path_43189'
          //     data-name='Path 43189'
          //     d='M13.789,1H3.684A1.689,1.689,0,0,0,2,2.684V14.474H3.684V2.684H13.789Zm2.526,3.368H7.053A1.689,1.689,0,0,0,5.368,6.053V17.842a1.689,1.689,0,0,0,1.684,1.684h9.263A1.689,1.689,0,0,0,18,17.842V6.053A1.689,1.689,0,0,0,16.316,4.368Zm0,13.474H7.053V6.053h9.263Z'
          //     transform='translate(2 1.737)'
          //     fill='currentColor'
          //   />
          // </svg>,

          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 18 18'
              width='1.8rem'
              style={{ cursor: 'pointer', marginLeft: '10px' }}
              fill='currentColor'
              onClick={() => setValue(`AD${(Math.random() * 1000000).toFixed(0)}DC`)}>
              <path d='M1.8 9c0-2.2 1-4.3 2.7-5.6v2.5h1.8V.4H.9v1.8h2.2C-.7 5.5-1 11.2 2.3 15c1.5 1.7 3.6 2.8 5.8 3v-1.8c-3.6-.5-6.3-3.6-6.3-7.2zM18 10c.5-5-3.1-9.4-8-10v1.8c1.9.2 3.5 1.2 4.7 2.6 2.5 3.1 2 7.7-1.1 10.2v-2.5h-1.8v5.4h5.4v-1.8H15c1.6-1.4 2.7-3.5 3-5.7z' />
            </svg>
            {/* <svg
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
              */}
          </>
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.25rem'
            viewBox='0 0 13.5 15'
            fill='currentColor'
            style={{ transform: 'translate(4px, 2px)' }}>
            <path d='M13 15c-.3 0-.5-.2-.5-.5v-1.6c0-1.4-1.2-2.6-2.6-2.6H3.6c-1.4 0-2.6 1.2-2.6 2.6v1.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1.6c0-2 1.6-3.6 3.6-3.6h6.2c2 0 3.6 1.6 3.6 3.6v1.6c.1.3-.1.5-.4.5zM6.7 7.2c-2 0-3.6-1.6-3.6-3.6S4.7 0 6.7 0c1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1 2.6c-.8.6-1.7.9-2.7.9.1 0 .1 0 0 0zM6.8 1C5.3 1 4.1 2.2 4.1 3.6c0 1.4 1.2 2.6 2.6 2.6.7 0 1.4-.3 1.9-.8.5-.4.8-1.1.8-1.8s-.3-1.4-.8-1.8C8.1 1.3 7.5 1 6.8 1z' />
          </svg>,

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.25rem'
            viewBox='0 0 13.5 15'
            fill='currentColor'
            style={{ transform: 'translate(4px, 2px)', marginLeft: '5px' }}>
            <path d='M13 15c-.3 0-.5-.2-.5-.5v-1.6c0-1.4-1.2-2.6-2.6-2.6H3.6c-1.4 0-2.6 1.2-2.6 2.6v1.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1.6c0-2 1.6-3.6 3.6-3.6h6.2c2 0 3.6 1.6 3.6 3.6v1.6c.1.3-.1.5-.4.5zM6.7 7.2c-2 0-3.6-1.6-3.6-3.6S4.7 0 6.7 0c1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1 2.6c-.8.6-1.7.9-2.7.9.1 0 .1 0 0 0zM6.8 1C5.3 1 4.1 2.2 4.1 3.6c0 1.4 1.2 2.6 2.6 2.6.7 0 1.4-.3 1.9-.8.5-.4.8-1.1.8-1.8s-.3-1.4-.8-1.8C8.1 1.3 7.5 1 6.8 1z' />
          </svg>

          // <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          //   <g data-name='Group 134'>
          //     <path
          //       data-name='Path 1225'
          //       d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
          //       transform='translate(-527 -109)'
          //       style={{ fill: 'none', stroke: '#7d86a9', strokeLinecap: 'round', strokeLinejoin: 'round' }}
          //     />
          //     <path data-name='Rectangle 687' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
          //   </g>
          // </svg>,
          // <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          //   <g data-name='Group 134'>
          //     <path
          //       data-name='Path 1225'
          //       d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
          //       transform='translate(-527 -109)'
          //       style={{ fill: 'none', stroke: '#7d86a9', strokeLinecap: 'round', strokeLinejoin: 'round' }}
          //     />
          //     <path data-name='Rectangle 687' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
          //   </g>
          // </svg>
        ]}
        endIcon={[
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.25rem'
            viewBox='0 0 13.5 15'
            fill='currentColor'
            style={{ transform: 'translate(4px, 2px)', marginRight: '10px' }}>
            <path d='M13 15c-.3 0-.5-.2-.5-.5v-1.6c0-1.4-1.2-2.6-2.6-2.6H3.6c-1.4 0-2.6 1.2-2.6 2.6v1.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1.6c0-2 1.6-3.6 3.6-3.6h6.2c2 0 3.6 1.6 3.6 3.6v1.6c.1.3-.1.5-.4.5zM6.7 7.2c-2 0-3.6-1.6-3.6-3.6S4.7 0 6.7 0c1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1 2.6c-.8.6-1.7.9-2.7.9.1 0 .1 0 0 0zM6.8 1C5.3 1 4.1 2.2 4.1 3.6c0 1.4 1.2 2.6 2.6 2.6.7 0 1.4-.3 1.9-.8.5-.4.8-1.1.8-1.8s-.3-1.4-.8-1.8C8.1 1.3 7.5 1 6.8 1z' />
          </svg>

          // <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          //   <g data-name='Group 134'>
          //     <path
          //       data-name='Path 1225'
          //       d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
          //       transform='translate(-527 -109)'
          //       style={{ fill: 'none', stroke: '#7d86a9', strokeLinecap: 'round', strokeLinejoin: 'round' }}
          //     />
          //     <path data-name='Rectangle 687' style={{ fill: 'none' }} d='M0 0h24v24H0z' />
          //   </g>
          // </svg>
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
