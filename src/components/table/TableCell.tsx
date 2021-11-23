import { typedMemo } from '@/helpers/typedMemo';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import classNames from 'classnames';
import { CSSProperties, FC } from 'react';
import styles from './TableCell.module.scss';
import { getMyUIPrefix } from '@/configs';
export interface TableCellProps extends IComponent {
  component?: ComponentType;
  align?: 'left' | 'right' | 'center';
  color?: UIColors;
  style?: CSSProperties;
}

export const TableCell: FC<TableCellProps> = ({
  children,
  align,
  color,
  component: Component = 'td',
  className,
  ...props
}) => {
  return (
    <Component
      className={classNames(
        styles.TableCell,
        styles[`TableCell--${color}`],
        styles[`TableCell--${align}`],
        className,
        `${getMyUIPrefix()}-TableCell`
      )}
      {...props}>
      {children}
    </Component>
  );
};

export default typedMemo(TableCell);
