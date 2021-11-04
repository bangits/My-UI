import { number, withKnobs, boolean, object } from '@storybook/addon-knobs';
import React from 'react';
import Pagination from './Pagination';

export default {
  component: Pagination,
  decorators: [withKnobs],
  title: 'components/Pagination/Pagination'
};

export const Default = () => {
  return (
    <Pagination
      page={number('page', 94)}
      totalCount={number('totalCount', 365)}
      // onChange={(e) => {
      //   alert(e.selected + 1);
      // }}
      showPageSizeSelect={boolean('showPageSizeSelect', true)}
      showTotalCountInfo={boolean('showTotalCountInfo', true)}
      showJumpToPage={boolean('showJumpToPage', true)}
      pageSize={object('pageSize', [
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
      ])}
    />
  );
};
