import { optionsKnob } from '@storybook/addon-knobs';
import { COLOR_TYPES } from '@/types';

export const STORYBOOK_SECTIONS = {
  CHECKBOX_AND_RADIO: 'Checkbox and Radio Button',
  ALERT: 'Alert',
  DROPDOWN: 'Dropdown'
};

export const getComponentName = (sectionKey: keyof typeof STORYBOOK_SECTIONS, componentName) => {
  return `components/${STORYBOOK_SECTIONS[sectionKey]}/${componentName}`;
};

export const getColorKnobs = () =>
  optionsKnob('color', COLOR_TYPES, 'primary', {
    display: 'inline-radio'
  });
