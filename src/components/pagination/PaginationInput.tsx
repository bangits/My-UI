import { TextInput, Typography } from '@/components';
import React, { FC, useState } from 'react';
import styles from './Pagination.module.scss';

export interface PaginationInputProps {
  onChange: (value: number) => void;
  totalPagesCount: number;
  inputTitle?: string;
  placeholder?: string;
}

const PaginationInput: FC<PaginationInputProps> = ({ onChange, totalPagesCount, inputTitle, placeholder }) => {
  const [selectedPage, setSelectedPage] = useState<number | string>('');

  return (
    <div className={styles.PaginationInputContainer}>
      <Typography variant='p4' component='span' className={styles.PaginationInputLabel}>
        {inputTitle}
      </Typography>

      <TextInput
        className={styles.PaginationInputJupm}
        value={selectedPage}
        maxLength={6}
        type='number'
        onChange={(e) => setSelectedPage(+e.target.value || '')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (+selectedPage > totalPagesCount) return;

            onChange(+selectedPage - 1);
          }
        }}
        placeholder={placeholder}
        fullWidth
      />
    </div>
  );
};

export default PaginationInput;
