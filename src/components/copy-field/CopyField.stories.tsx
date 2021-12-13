import { boolean, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import CopyFiled from './CopyField';
import { getColorKnobs } from '@/configs';

export default {
  component: CopyFiled,
  decorators: [withKnobs],
  title: 'components/CopyFiled/CopyFiled'
};

export const Default = () => {
  return (
    <CopyFiled
      label={`Glossary":{"Title":"Example Glossary","Glossdiv": {"Title":"S","Glosslist":`}
      tooltip={{
        text: 'Copy Current Field',
        showEvent: 'hover',
        placement: 'right'
      }}
    />
  );
};
