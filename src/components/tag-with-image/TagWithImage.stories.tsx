import { text, withKnobs } from '@storybook/addon-knobs';
import TagWithImage from './TagWithImage';
import { Icons } from '@/my-ui-core';

export default {
  component: <></>,
  decorators: [withKnobs],
  title: 'components/TagWithImage/TagWithImage'
};

export const Default = () => {
  return (
    <TagWithImage
      showActionIcon
      label={text('label', 'Armenia')}
      imagePosition='start'
      imageSource={text(
        'source',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
      )}
    />
  );
};
