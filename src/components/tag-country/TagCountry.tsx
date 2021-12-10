import { Typography } from '@/my-ui-core';
import styles from './TagCountry.module.scss';
import classNames from 'classnames';
import React, { HTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
export interface TagCountryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, null> {
  imgSrc?: string;
  children?: ReactNode;
  className?: string;
}

const TagCountry: FC<TagCountryProps> = ({ children, imgSrc, className }) => {
  return (
    <div className={classNames(styles['TagCountryWrapper'], className)}>
      <div className={styles.Flag}>
        <img src={imgSrc} />
      </div>
      <div className={styles.Country}>
        <Typography component='span' variant='p4'>
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default TagCountry;
