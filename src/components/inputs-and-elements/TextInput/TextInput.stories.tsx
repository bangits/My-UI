import { action } from '@storybook/addon-actions';
import { boolean, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
  component: TextInput,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Text Input'
} as ComponentMeta<typeof TextInput>;

export const Default = () => (
  <TextInput
    disabled={boolean('Disabled', false)}
    placeholder='Default Input'
    defaultValue={text('Default Value', 'xx@bangits.com')}
    maxLength={text('Max Length', '25')}
    type='text'
    error={false}
    label={text('Label', 'Custom Input')}
    onChange={action('onChange')}
  />
);
