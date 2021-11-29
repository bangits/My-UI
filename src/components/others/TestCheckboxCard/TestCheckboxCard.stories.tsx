import { getComponentName, getColorKnobs } from '@/configs';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import TestCheckboxCard from './TestCheckboxCard';
import { ChromeIcon, OperaIcon, FirefoxIcon, SafariIcon, EdgeIcon, IEIcon } from '@/icons';
import styles from './TestCheckboxCard.module.scss';

export default {
  component: TestCheckboxCard,
  decorators: [withKnobs],
  title: 'components/Others/Test Checkbox Card'
} as ComponentMeta<typeof TestCheckboxCard>;

export const Default = () => {
  return (
    <div className={styles['CheckboxCardList']}>
      <TestCheckboxCard
        icon={<OperaIcon width='30px' />}
        color={getColorKnobs()}
        cardLabel={text('Opera label', 'Opera')}
        disabled={boolean('disabled', false)}
      />
      <TestCheckboxCard
        icon={<ChromeIcon width='30px' />}
        color={getColorKnobs()}
        cardLabel={text('Chrome label', 'Chrome')}
        disabled={boolean('disabled', false)}
      />
      <TestCheckboxCard
        icon={<FirefoxIcon width='30px' />}
        color={getColorKnobs()}
        cardLabel={text('Firefox label', 'Firefox')}
        disabled={boolean('disabled', false)}
      />
      <TestCheckboxCard
        icon={<SafariIcon width='30px' />}
        color={getColorKnobs()}
        cardLabel={text('Safari label', 'Safari')}
        disabled={boolean('disabled', false)}
      />
      <TestCheckboxCard
        icon={<EdgeIcon width='30px' />}
        color={getColorKnobs()}
        cardLabel={text('Edge label', 'Edge')}
        disabled={boolean('disabled', false)}
      />
      <TestCheckboxCard
        icon={<IEIcon width='30px' />}
        color={getColorKnobs()}
        cardLabel={text('IE label', 'IE')}
        disabled={boolean('disabled', false)}
      />
    </div>
  );
};
