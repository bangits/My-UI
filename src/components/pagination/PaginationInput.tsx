import React, { useState } from 'react';
import { TextInput, Typography } from '@/components';
import styles from './Pagination.module.scss';
import classNames from 'classnames';
import { getMyUIPrefix } from '@/configs';

const PaginationInput = ({ setGoToPage, pageCount }) => {
  const [page, setPage] = useState<number | string>('');
  return (
    <div className={styles.PaginationInputContainer}>
      <Typography
        variant='p4'
        component='span'
        className={classNames(styles.PaginationInputLabel, `${getMyUIPrefix()}-PaginationInputLabel`)}>
        Jump to Page
      </Typography>
      <TextInput
        className={classNames(styles.PaginationInputJupm, `${getMyUIPrefix()}-PaginationInputJump`)}
        value={page}
        maxLength={6}
        type='number'
        onChange={(e) => setPage(+e.target.value || '')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (+page > pageCount) return;

            setGoToPage(+page - 1);
          }
        }}
        placeholder='155'
        fullWidth
      />
    </div>
  );
};

export default PaginationInput;
