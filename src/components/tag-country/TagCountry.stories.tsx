import { boolean, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { getColorKnobs } from '@/configs';
import TagCountry from './TagCountry';

export default {
  component: TagCountry,
  decorators: [withKnobs],
  title: 'components/TagCountry/TagCountry'
};

export const Default = () => {
  return (
    <TagCountry
      children={text('country', 'Armenia')}
      imgSrc={text(
        'Flag',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
      )}
    />
  );
};
