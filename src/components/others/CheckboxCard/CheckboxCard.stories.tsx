import { getColorKnobs } from '@/configs';
import { ChromeIcon, OperaIcon } from '@/icons';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import CheckboxCard from './CheckboxCard';

export default {
  component: CheckboxCard,
  decorators: [withKnobs],
  title: 'components/Others/Checkbox Card'
};

export const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 10 }}>
        <CheckboxCard
          color={getColorKnobs()}
          disabled={boolean('disabledOpera', false)}
          label='Opera'
          icon={<OperaIcon width='30px' />}
          onChange={action('onChangeOpera')}
        />
      </div>
      <CheckboxCard
        color={getColorKnobs()}
        disabled={boolean('disabledChrome', false)}
        label='Chrome'
        icon={<ChromeIcon width='30px' />}
        onChange={action('onChangeChrome')}
      />
    </div>
  );
};
