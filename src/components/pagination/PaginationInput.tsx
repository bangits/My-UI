import React, { useState } from 'react';
import { TextInput, Typography } from '@/components';
import styles from './Pagination.module.scss';

const PaginationInput = ({ setGoToPage, pageCount, inputTitle }) => {
  const [page, setPage] = useState<number | string>('');
  return (
    <div className={styles.PaginationInputContainer}>
      <Typography variant='p4' component='span' className={styles.PaginationInputLabel}>
        {inputTitle}
        Jump to Page
      </Typography>
      <TextInput
        className={styles.PaginationInputJupm}
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
