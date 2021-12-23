import { TextInput, TextInputProps } from '@/components';
import React, { FC } from 'react';

const DatePickerInput: FC<TextInputProps & { placeholderText?: string }> = ({ placeholderText, ...props }) => (
  <>
    <TextInput
      {...props}
      type='text'
      label={placeholderText}
      onChange={(e) => e.preventDefault()}
      endIcon={
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 18' fill='currentColor'>
          <path d='M5.3 8.1H3.5v1.8h1.8V8.1zm3.6 0H7.1v1.8h1.8V8.1zm3.5 0h-1.8v1.8h1.8V8.1zm1.8-6.3h-.9V0h-1.8v1.8H4.4V0H2.6v1.8h-.9c-1 0-1.8.8-1.8 1.8v12.6c0 1 .8 1.8 1.8 1.8h12.4c1 0 1.8-.8 1.8-1.8V3.6c.1-1-.7-1.8-1.7-1.8zm0 14.4H1.8V6.3h12.4v9.9z' />
        </svg>

        // <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
        //   <g id='Group_2364' data-name='Group 2364' transform='translate(-5400 -2651)'>
        //     <path
        //       id='Icon_material-date-range'
        //       data-name='Icon material-date-range'
        //       d='M9.833,11.1H8.056v1.8H9.833Zm3.556,0H11.611v1.8h1.778Zm3.556,0H15.167v1.8h1.778Zm1.778-6.3h-.889V3H16.056V4.8H8.944V3H7.167V4.8H6.278A1.781,1.781,0,0,0,4.509,6.6L4.5,19.2A1.789,1.789,0,0,0,6.278,21H18.722A1.794,1.794,0,0,0,20.5,19.2V6.6A1.794,1.794,0,0,0,18.722,4.8Zm0,14.4H6.278V9.3H18.722Z'
        //       transform='translate(5399.5 2651)'
        //       fill='currentColor'
        //     />
        //     <rect
        //       id='Rectangle_1161'
        //       data-name='Rectangle 1161'
        //       fill='none'
        //       width='24'
        //       height='24'
        //       transform='translate(5400 2651)'
        //     />
        //   </g>
        // </svg>
      }
    />
  </>
);

export default DatePickerInput;
