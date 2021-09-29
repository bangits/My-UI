import classNames from 'classnames';
import React, { FC, ReactHTML, ReactSVG } from 'react';
import styles from './TableHead.module.scss';

export interface TableHeadProps {
  component?: keyof ReactHTML | keyof ReactSVG;
  hideSortIcon?: boolean;
  direction?: boolean;
  color?: 'primary' | 'secondary';
  withSorting?: any;
}

export const TableHead: FC<TableHeadProps> = ({
  children,
  hideSortIcon,
  withSorting,
  direction,
  component: Component = 'th'
}) => {
  return (
    <Component className={styles.TableHead} {...withSorting}>
      {children}
      <span className={styles.IconArrow}>
        {!hideSortIcon ? (
          <>
          <svg className={classNames(styles.IconUp, styles.IconDisabled)}
            id='Layer_1'
            x='0px'
            y='0px'
            viewBox='0 0 386.257 386.257'>
            <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
          </svg>
          <svg className={classNames(styles.IconDown , styles.IconDisabled)}
            id='Layer_1'
            x='0px'
            y='0px'
            viewBox='0 0 386.257 386.257'>
            <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
          </svg>
        </>
        ) : direction ? (
          <>
            <svg className={classNames(styles.IconUp)}
              id='Layer_1'
              x='0px'
              y='0px'
              viewBox='0 0 386.257 386.257'>
              <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
            </svg>
            <svg className={classNames(styles.IconDown, styles.IconDisabled)}
              id='Layer_1'
              x='0px'
              y='0px'
              viewBox='0 0 386.257 386.257'>
              <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
            </svg>
          </>
        ) : (
          <>
            <svg className={classNames(styles.IconUp, styles.IconDisabled)}
              id='Layer_1'
              x='0px'
              y='0px'
              viewBox='0 0 386.257 386.257'>
              <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
            </svg>
            <svg className={classNames(styles.IconDown )}
              id='Layer_1'
              x='0px'
              y='0px'
              viewBox='0 0 386.257 386.257'>
              <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
            </svg>
          </>
        )}
      </span>
    </Component>
  );
};

export default TableHead;
