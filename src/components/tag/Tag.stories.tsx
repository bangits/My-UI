import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';
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
        color={optionsKnob(
          'color',
          {
            danger: 'danger',
            warning: 'warning',
            success: 'success',
            primary: 'primary'
          },
          'primary',
          {
            display: 'inline-radio'
          }
        )}
        handleClick={() => {
          alert('close');
        }}
      />
    </>
  );
};
