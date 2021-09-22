import React, { FC, ReactHTML, ReactSVG, useState } from 'react';
import classNames from 'classnames';

export interface TableRowProps {
  hover?: boolean;
  selected?: boolean;
  color?: 'primary' | 'secondary';
}

export const TableRow: FC<TableRowProps> = ({ children, hover, color, selected }) => {
  const [hoverRow, setHoverRow] = useState<boolean>(hover);

  return (
    <tr
      onMouseOver={() => hover ? setHoverRow(true) : null}
      onMouseOut={() => hover ? setHoverRow(false) : null}
      style={{ color: `${hoverRow ? 'red' : 'blue'}` }}
      className={classNames({
          [`hover`]: hoverRow,
          [`selected`]: selected,
      }, `${color}--row`)}
      >
      {children}
    </tr>
  );
};

export default TableRow;
