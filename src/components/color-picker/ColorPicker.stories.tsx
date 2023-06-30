import { withKnobs } from '@storybook/addon-knobs';
import { useRef, useState } from 'react';
import ColorPicker from './ColorPicker';

export default {
  component: ColorPicker,
  decorators: [withKnobs],
  title: 'components/ColorPicker/ColorPicker'
};

const defaultColor = 'black';

export const Default = () => {
  const [value, setValue] = useState(defaultColor);
  const pickerRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <ColorPicker value={value} pickerRef={pickerRef} onChange={handleChange} />;
};
