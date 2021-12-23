import { typedMemo } from '@/helpers/typedMemo';
import { ArrowIcon } from '@/icons';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import classNames from 'classnames';
import React, { CSSProperties, FC } from 'react';
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
    <Component className={styles.TableHead} {...props} title=''>
      <div className={styles.TableHeadContainer}>
        {children}
        {!hideSortIcon && (
          <div className={styles.IconArrow}>
            <ArrowIcon
              width='1rem'
              className={classNames(styles.IconUp, {
                [styles.IconDisabled]: !selectedDirection || direction === 'asc'
              })}
            />
            <ArrowIcon
              width='1rem'
              className={classNames(styles.IconDown, {
                [styles.IconDisabled]: !selectedDirection || direction === 'desc'
              })}
            />
          </div>
        )}
      </div>
    </Component>
  );
};

export default typedMemo(TableHead);
