export const STORYBOOK_SECTIONS = {
  CHECKBOX_AND_RADIO: 'Checkbox and Radio Button',
  ALERT: 'Alert',
  DROPDOWN: 'Dropdown'
};

export const getComponentName = (sectionKey: keyof typeof STORYBOOK_SECTIONS, componentName) => {
  return `components/${STORYBOOK_SECTIONS[sectionKey]}/${componentName}`;
};
