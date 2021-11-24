import { boolean, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import Tag from './Tag';
import { getColorKnobs } from '@/configs';

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
        handleClick={() => {
          alert('close');
        }}
      />
    </>
  );
};
