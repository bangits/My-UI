import { boolean, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { getColorKnobs } from '@/configs';
import TagCountry from './TagCountry';

export default {
  component: TagCountry,
  decorators: [withKnobs],
  title: 'components/TagCountry/TagCountry'
};

export const Default = () => {
  return <TagCountry />;
};
