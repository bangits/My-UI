import ReactSelect from '@em/react-select';
import { StateManagerProps } from '@em/react-select/src/useStateManager';
import React, { FC } from 'react';

export interface ReactSelectProps {
  selectProps?: StateManagerProps;
}

const Select: FC<ReactSelectProps> = ({ children, ...selectProps }) => (
  <ReactSelect className='our__select' classNamePrefix='web__team' {...selectProps} />
);

export default Select;
