import { getColorKnobs } from '@/configs';
import { number, optionsKnob, withKnobs } from '@storybook/addon-knobs';
import LoadingIndicator from './LoadingIndicator';

export default {
  component: LoadingIndicator,
  decorators: [withKnobs],
  title: 'components/LoadingIndicator/LoadingIndicator'
};

export const Default = () => {
  return (
    <LoadingIndicator
      label='XXXX_Icon_50*50.png'
      percent={number('percent', 75)}
      variant={optionsKnob(
        'variant',
        {
          circle: 'circle',
          square: 'square'
        },
        'circle',
        {
          display: 'inline-radio'
        }
      )}
      color={getColorKnobs()}
    />
  );
};
