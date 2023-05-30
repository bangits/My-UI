import { text, withKnobs } from '@storybook/addon-knobs';
import TagWithImage from './TagWithImage';

export default {
  component: <></>,
  decorators: [withKnobs],
  title: 'components/TagWithImage/TagWithImage'
};

export const Default = () => {
  return (
    <TagWithImage
      label={text('label', 'Armenia')}
      imagePosition='end'
      imageSource={text(
        'source',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
      )}
    />
  );
};
