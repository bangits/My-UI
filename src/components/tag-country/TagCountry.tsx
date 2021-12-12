import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './TagCountry.module.scss';
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
