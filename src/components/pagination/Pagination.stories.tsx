import { number, object, withKnobs } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  component: Pagination,
  decorators: [withKnobs],
  title: 'components/Pagination/Pagination'
};

export const Default = () => {
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState<string | number>(20);

  return (
    <Pagination
      page={page}
      onChange={setPage}
      totalPagesCount={number('totalPagesCount', 365)}
      pageSizeSelect={object('pageSizeSelect', {
        dropdownLabel: 'Row per page: ',
        options: [
          {
            label: '20',
            value: 20
          },
          {
            label: '30',
            value: 30
          },
          {
            label: '40',
            value: 40
          }
        ],
        defaultValue: rowPerPage,
        onChange: setRowPerPage
      })}
      jumpToPage={object('jumpToPage', {
        inputTitle: 'Jump to page',
        placeholder: '155'
      })}
      totalCountInfo={`1-${rowPerPage} of ${number('totalPagesCount', 365)}`}
    />
  );
};
