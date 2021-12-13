import { getColorKnobs } from '@/configs';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import Tag from './Tag';

export default {
  component: Tag,
  decorators: [withKnobs],
  title: 'components/Tag/Tag'
};

export const Default = () => {
  return (
    <>
      <Tag
        title={text('title', 'Armenia')}
        closeIcon={boolean('closeIcon', true)}
        inactive={boolean('inactive', false)}
        color={getColorKnobs()}
        onClose={() => {
          alert('close');
        }}
      />
    </>
  );
};
