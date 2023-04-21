import { typedMemo } from '@/helpers/typedMemo';
import { ComponentType, IComponent } from '@/types/props';
import classNames from 'classnames';
import { CSSProperties, forwardRef, ReactNode, useCallback, useState } from 'react';
import { UIColors } from '../../types/ui';
import styles from './TableRow.module.scss';
export interface TableRowProps extends IComponent {
  hover?: boolean;
  selected?: boolean;
  color?: UIColors;
  component?: ComponentType;
  style?: CSSProperties;
  isLoading?: boolean;
  children?: ReactNode;
}

export const TableRow = forwardRef<HTMLElement, TableRowProps>(
  ({ children, hover, color, selected, component: Component = 'tr', isLoading = false }, ref) => (
    // @ts-expect-error Ingoring typescript for ref type casting
    <Component
      // @ts-expect-error Ingoring typescript for ref type casting
      className={classNames(styles.TableRow, {
        [styles['TableRow--loading']]: isLoading,
        [styles['TableRow--default']]: true,
        [styles['TableRow--hover']]: hover,
        [styles['TableRow--selected']]: selected,
        [`${styles[`TableRow--${color}`]}`]: color
      })}
      ref={ref}>
      {children}
    </Component>
  )
);

export default typedMemo(TableRow);
