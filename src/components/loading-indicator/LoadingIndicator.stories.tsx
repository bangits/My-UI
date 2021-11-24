import { number, withKnobs, optionsKnob } from '@storybook/addon-knobs';
import LoadingIndicator from './LoadingIndicator';
import { getColorKnobs } from '@/configs';

export default {
  component: LoadingIndicator,
  decorators: [withKnobs],
  title: 'components/LoadingIndicator/LoadingIndicator'
};

export const Default = () => {
  return (
    <LoadingIndicator
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
