import { withKnobs } from '@storybook/addon-knobs';
import { InputIpPicker } from './InputIpPicker';

export default {
  component: InputIpPicker,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Input Ip Picker'
};

export const Default = () => {
  return (
    <InputIpPicker value={['118', '225', '0', '0']} onChange={(address) => console.log(address)} label='IP Address' />
  );
};
