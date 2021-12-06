import { boolean, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import CopyFiled from './CopyField';
import { getColorKnobs } from '@/configs';

export default {
  component: CopyFiled,
  decorators: [withKnobs],
  title: 'components/CopyFiled/CopyFiled'
};

export const Default = () => {
  return <CopyFiled />;
};
