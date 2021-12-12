import { Typography } from '@/my-ui-core';
import styles from './TagCountry.module.scss';
import classNames from 'classnames';
import React, { HTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
export interface TagCountryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, null> {
  imgSrc?: string;
  tagName?: ReactNode;
  className?: string;
}

const TagCountry: FC<TagCountryProps> = ({ tagName, imgSrc, className }) => {
  return (
    <div className={classNames(styles['TagCountryWrapper'], className)}>
      <div className={styles.Flag}>
        <img src={imgSrc} />
      </div>
      <div className={styles.Country}>
        <Typography component='span' variant='p4'>
          {tagName}
        </Typography>
      </div>
    </div>
  );
};

export default TagCountry;
