import { typedMemo } from '@/helpers/typedMemo';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './TableCell.module.scss';
export interface TableCellProps extends IComponent {
  component?: ComponentType;
  align?: 'left' | 'right' | 'center';
  color?: UIColors;
}

export const TableCell: FC<TableCellProps> = ({ children, align, color, component: Component = 'td', className }) => {
  return (
    <Component
      className={classNames(styles.TableCell, styles[`TableCell--${color}`], styles[`TableCell--${align}`], className)}>
      {children}
    </Component>
  );
};

export default typedMemo(TableCell);
