import classNames from 'classnames';
import { FC, ReactHTML, ReactSVG } from 'react';

export interface TableCellProps {
  component?: keyof ReactHTML | keyof ReactSVG;
  align?: 'left' | 'right' | 'center';
  color?: 'primary' | 'secondary';
}
export const TableCell: FC<TableCellProps> = ({ children, align, color, component: Component = 'td' }) => {
  return <Component className={classNames(`${color}--primary `, `${align}--cell`)}>{children}</Component>;
};

export default TableCell;
