import { getColorKnobs } from '@/configs';
import { LinkIcon } from '@/icons';
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
        value={1}
        title={text('title', 'Armenia')}
        closeIcon={boolean('closeIcon', true)}
        endIcon={<LinkIcon />}
        inactive={boolean('inactive', false)}
        color={getColorKnobs()}
        onClose={() => {
          alert('close');
        }}
      />
    </>
  );
};
