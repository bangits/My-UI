import { typedMemo } from '@/helpers/typedMemo';
import { ArrowIcon } from '@/icons';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import classNames from 'classnames';
import React, { CSSProperties, FC } from 'react';
import styles from './TableHead.module.scss';
import { getMyUIPrefix } from '@/configs';

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
    <Component className={classNames(styles.TableHead, `${getMyUIPrefix()}-TableHead`)} {...props}>
      <div className={classNames(styles.TableHeadContainer, `${getMyUIPrefix()}-TableHeadContainer`)}>
        {children}
        {!hideSortIcon && (
          <div className={classNames(styles.IconArrow, `${getMyUIPrefix()}-IconArrow`)}>
            <ArrowIcon
              className={classNames(styles.IconUp, `${getMyUIPrefix()}-IconUp`, {
                [styles.IconDisabled]: !selectedDirection || direction === 'asc'
              })}
            />
            <ArrowIcon
              className={classNames(styles.IconDown, `${getMyUIPrefix()}-IconDown`, {
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
