import classNames from 'classnames';
import { FC, ReactHTML, ReactSVG } from 'react';
import styles from './TableCell.module.scss';

export interface TableCellProps {
  component?: keyof ReactHTML | keyof ReactSVG;
  align?: 'left' | 'right' | 'center';
  color?: 'primary' | 'secondary';
}
export const TableCell: FC<TableCellProps> = ({ children, align, color, component: Component = 'td' }) => {
  return (
    <Component className={classNames(styles.TableCell, `color--${color} `, `cell--${align}`)}>{children}</Component>
  );
};

export default TableCell;
