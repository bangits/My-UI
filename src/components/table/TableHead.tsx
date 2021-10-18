import { typedMemo } from '@/helpers';
import { ArrowIcon } from '@/icons';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import classNames from 'classnames';
import { CSSProperties } from 'markdown-to-jsx/node_modules/@types/react';
import React, { FC } from 'react';
import styles from './TableHead.module.scss';
export interface TableHeadProps extends IComponent {
  component?: ComponentType;
  selectedDirection?: boolean;
  direction?: 'asc' | 'desc';
  color?: UIColors;
  hideSortIcon?: boolean;
  style?: CSSProperties;
}

export const TableHead: FC<TableHeadProps> = ({
  children,
  selectedDirection,
  direction,
  component: Component = 'th',
  hideSortIcon = false,
  ...props
}) => {
  return (
    <Component className={styles.TableHead} {...props}>
      <div>
        {children}
        {!hideSortIcon && (
          <span className={styles.IconArrow}>
            <ArrowIcon
              className={classNames(styles.IconUp, {
                [styles.IconDisabled]: !selectedDirection || direction === 'asc'
              })}
            />
            <ArrowIcon
              className={classNames(styles.IconDown, {
                [styles.IconDisabled]: !selectedDirection || direction === 'desc'
              })}
            />
          </span>
        )}
      </div>
    </Component>
  );
};

export default typedMemo(TableHead);
