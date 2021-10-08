import { typedMemo } from '@/helpers/typedMemo';
import { IComponent, ComponentType } from '@/types/props';
import classNames from 'classnames';
import { CSSProperties } from 'markdown-to-jsx/node_modules/@types/react';
import { FC, useCallback, useState } from 'react';
import { UIColors } from '../../types/ui';
import styles from './TableRow.module.scss';
export interface TableRowProps extends IComponent {
  hover?: boolean;
  selected?: boolean;
  color?: UIColors;
  component?: ComponentType;
  style?: CSSProperties;
}

export const TableRow: FC<TableRowProps> = ({ children, hover, color, selected, component: Component = 'tr' }) => {
  const [hoverRow, setHoverRow] = useState<boolean>(false);

  const handleMouseOver = useCallback(() => {
    if (hover) setHoverRow(true);
  }, []);
  const handleMouseOut = useCallback(() => {
    if (hover) setHoverRow(false);
  }, []);

  return (
    <Component
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={classNames(styles.TableRow, {
        [`${styles['TableRow--hover']}`]: hoverRow,
        [`${styles['TableRow--selected']}`]: selected,
        [`${styles[`TableRow--${color}`]}`]: color
      })}>
      {children}
    </Component>
  );
};

export default typedMemo(TableRow);
