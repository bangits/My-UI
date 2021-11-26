import { getComponentName, getColorKnobs } from '@/configs';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import TestCheckboxCard from './TestCheckboxCard';
import { ChromeIcon, OperaIcon } from '@/icons';

export default {
  component: TestCheckboxCard,
  decorators: [withKnobs],
  title: 'components/Others/Test Checkbox Card'
} as ComponentMeta<typeof TestCheckboxCard>;

export const Default = () => {
  return (
    <TestCheckboxCard
      icon={<OperaIcon width='30px' />}
      color={getColorKnobs()}
      cardLabel={text('label', 'Opera')}
      disabled={boolean('disabled', false)}
    />
  );
};
