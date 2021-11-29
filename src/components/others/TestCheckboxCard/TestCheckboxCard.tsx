import { getMyUIPrefix } from '@/configs';
import { ChromeIcon, OperaIcon } from '@/icons';
import classNames from 'classnames';
import React, { FC, HTMLAttributes, DetailedHTMLProps, useState } from 'react';
import styles from './TestCheckboxCard.module.scss';
import { UIColors } from '@/types';
import { withKnobs, text } from '@storybook/addon-knobs';

export interface TestCheckboxCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, null> {
  color?: UIColors;
  cardLabel?: string;
  icon?: any;
  disabled?: boolean;
}

const TestCheckboxCard: FC<TestCheckboxCardProps> = ({ color, icon, children, cardLabel, disabled, ...props }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setActive(!active)}
        {...props}
        className={classNames(
          styles['CheckboxCard'],
          active ? styles[`CheckboxCard--${color}`] : null,
          disabled ? styles[`CheckboxCard--disable`] : null,
          `${getMyUIPrefix()}-CheckboxCard`,
          `${getMyUIPrefix()}-CheckboxCard--${color}`,
          disabled ? `${getMyUIPrefix()}-CheckboxCard--disable` : null
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
