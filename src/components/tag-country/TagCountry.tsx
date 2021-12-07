import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './TagCountry.module.scss';

const TagCountry = () => {
  return (
    <div className={styles.TagCountryWrapper}>
      <div className={styles.Flag}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png' />
      </div>
      <div className={styles.Country}>
        <Typography component='span' variant='p4'>
          Armenia
        </Typography>
      </div>
    </div>
  );
};

export default TagCountry;
