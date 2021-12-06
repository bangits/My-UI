import { CopyFieldIcon } from '@/icons';
import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './CopyField.module.scss';

const CopyField = () => {
  return (
    <div className={styles.CopyFieldWrapper}>
      <div className={styles.Url}>
        <Typography
          variant='p4'
          component='span'>{`Glossary":{"Title":"Example Glossary","Glossdiv": {"Title":"S","Glosslist":`}</Typography>
      </div>
      <div className={styles.Copy}>
        <CopyFieldIcon />
      </div>
    </div>
  );
};

export default CopyField;
