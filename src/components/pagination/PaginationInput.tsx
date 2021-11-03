import React, { useState } from 'react';
import { TextInput } from '@/components';

const PaginationInput = ({ setGoToPage }) => {
  const [page, setPage] = useState<number | string>(1);
  return (
    <div>
      Jump to page
      <TextInput
        value={page}
        maxLength={6}
        type='number'
        onChange={(e) => setPage(+e.target.value || '')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setGoToPage(page);
          }
        }}
        placeholder='155'
        fullWidth
      />
    </div>
  );
};

export default PaginationInput;
