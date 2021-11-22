import { DustbinIcon, PenIcon } from '@/icons';
import { optionsKnob, withKnobs } from '@storybook/addon-knobs';
import { ICON_BUTTON_VARIANTS } from './icon-button-types';
import IconButton from './IconButton';
import { getColorKnobs } from '@/configs';

export default {
  component: IconButton,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Icon Button'
};

export const Default = () => {
  return (
    <>
      <IconButton icon={<PenIcon />} color={getColorKnobs()} />

      <h1></h1>

      <IconButton icon={<DustbinIcon />} color={getColorKnobs()} />
    </>
  );
};
