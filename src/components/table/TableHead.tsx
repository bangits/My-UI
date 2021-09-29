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
          ''
        ) : direction ? (
          <>
            <svg
              style={{ width: '1rem', height: '1rem', display: 'block', transform: 'rotate(180deg)', fill: '#7C84AB' }}
              id='Layer_1'
              x='0px'
              y='0px'
              viewBox='0 0 386.257 386.257'>
              <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
            </svg>
            <svg
              style={{ width: '1rem', height: '1rem', position: 'absolute', left: '0', top: '0.7rem' }}
              id='Layer_1'
              x='0px'
              y='0px'
              viewBox='0 0 386.257 386.257'>
              <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
            </svg>
          </>
        ) : (
          <svg className='svg-icon' viewBox='0 0 20 20'>
            <path d='M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10'></path>
          </svg>
        )}
      </span>
    </Component>
  );
};

export default TableHead;
