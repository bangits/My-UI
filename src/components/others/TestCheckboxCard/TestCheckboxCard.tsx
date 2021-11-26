import { getMyUIPrefix } from '@/configs';
import { ChromeIcon, OperaIcon } from '@/icons';
import classNames from 'classnames';
import React, { FC, HTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './TestCheckboxCard.module.scss';
import { UIColors } from '@/types';
import { withKnobs, text } from '@storybook/addon-knobs';

export interface TestCheckboxCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, null> {
  color?: UIColors;
  cardLabel?: string;
  icon?: any;
  disabled?: any;
}

const TestCheckboxCard: FC<TestCheckboxCardProps> = ({ color, icon, children, cardLabel, disabled, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={classNames(
          styles['CheckboxCard'],
          styles['CheckboxCard'],
          styles[`CheckboxCard--${color}`],
          styles[`CheckboxCard--${disabled}`],
          `${getMyUIPrefix()}-CheckboxCard`,
          `${getMyUIPrefix()}-CheckboxCard--selected`,
          `${getMyUIPrefix()}-CheckboxCard--${color}`,
          `${getMyUIPrefix()}-CheckboxCard--${disabled}`
        )}>
        <div
          className={classNames(
            styles['CheckboxCard__ElementsGroup'],
            `${getMyUIPrefix()}-CheckboxCard__ElementsGroup`
          )}>
          {icon}
          <span className={classNames(styles['CheckboxCard__Label'], `${getMyUIPrefix()}-CheckboxCard__Label`)}>
            {cardLabel}
          </span>
        </div>
      </div>
    </>
  );
};

export default TestCheckboxCard;
