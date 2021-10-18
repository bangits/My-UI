import { DustbinIcon, PenIcon } from '@/icons';
import { optionsKnob, withKnobs } from '@storybook/addon-knobs';
import { ICON_BUTTON_VARIANTS } from './icon-button-types';
import IconButton from './IconButton';

export default {
  component: IconButton,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Icon Button'
};

export const Default = () => {
  return (
    <>
      <IconButton
        icon={<PenIcon />}
        variant={optionsKnob('variantsDark', ICON_BUTTON_VARIANTS, ICON_BUTTON_VARIANTS.dark, {
          display: 'inline-radio'
        })}
      />

      <h1></h1>

      <IconButton
        icon={<DustbinIcon />}
        variant={optionsKnob('variantsLight', ICON_BUTTON_VARIANTS, ICON_BUTTON_VARIANTS.light, {
          display: 'inline-radio'
        })}
      />
    </>
  );
};
