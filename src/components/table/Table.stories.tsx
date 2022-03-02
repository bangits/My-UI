import { IconButton, Status, Tooltip } from '@/components';
import { EditIcon, IllustrationIcon, ViewIcon } from '@/icons';
import { action } from '@storybook/addon-actions';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { useState } from 'react';
import Table from './Table';

export default {
  component: Table,
  decorators: [withKnobs],
  title: 'components/Table/Table'
};

export const Default = () => {
  const [loadingRowsIds, setLoadingRowsIds] = useState<(number | string)[]>([]);

  const data = object('data', [
    {
      y: 'ID1234567',
      z: 'ID1234567',
      b: '20BurningHot',
      n: 'EGT',
      w: '12/07/2021, 12:00:00',
      e: 'Mobile Desktop',
      v: 'Mobile, Desktop',
      c: 'Slots'
    },
    {
      y: 'ID1234567',
      z: 'ID1234567',
      b: '20BurningHot',
      n: 'EGT',
      w: '12/07/2021, 12:00:00',
      e: 'Mobile Desktop',
      v: 'Mobile, Desktop',
      c: 'Slots'
    }
  ]);

  return (
    <Table
      isLoading={boolean('isLoading', false)}
      fetch={action('fetch')}
      data={[
        ...data.map((d) => ({
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          r: <Status variant='blocked'>Blocked</Status>,
          ...d
        }))
      ]}
      loadingRowsIds={loadingRowsIds}
      loadingRowColumnProperty='y'
      columns={object('columns', [
        {
          Header: 'Icon',
          accessor: 'x',
          renderColumn: (...args) => {
            return (
              <img
                src={
                  'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80'
                }
              />
            );
          }
        },
        {
          Header: 'Game Id',
          accessor: 'y'
        },
        {
          Header: 'External Id',
          accessor: 'z'
        },
        {
          Header: 'Game Name',
          accessor: 'b'
        },
        {
          Header: 'Provider Id',
          accessor: 'n'
        },
        {
          Header: 'Category',
          accessor: 'c'
        },
        {
          Header: 'Version',
          accessor: 'v',
          maxWidth: '10rem'
        },
        {
          Header: 'Release date and time',
          accessor: 'w',
          align: 'right',
          sortingId: 'release'
        },
        {
          Header: 'Status',
          accessor: 'r',
          disableSortBy: true,
          maxWidth: '12rem',
          dataMaxWidth: '12rem'
        }
      ])}
      actions={[
        {
          component: () => (
            <Tooltip text='Edit' showEvent='hover'>
              <IconButton icon={<ViewIcon width='1.6rem' style={{ fill: '#505d6e' }} />} />
            </Tooltip>
          ),
          onClick: (column) => {
            setLoadingRowsIds([...loadingRowsIds, column.y]);

            setTimeout(() => {
              setLoadingRowsIds((prevLoadingRows) => prevLoadingRows.filter((row) => row !== column.y));
            }, 2000);
          },
          props: {}
        },
        {
          component: () => (
            <Tooltip text='Edit' showEvent='hover'>
              <IconButton icon={<EditIcon width='1.2rem' style={{ fill: '#505d6e' }} />} />
            </Tooltip>
          ),
          onClick: () => {},
          props: {}
        }
      ]}
      illustrationIcon={<IllustrationIcon />}
      emptyText={text('emptyText', `You don’t have any users added! Please add a user.`)}
      tableFooterData={object('tableFooterData', {
        z: {
          value: '20000 AMD',
          tooltipText: 'Totals of External Id'
        },
        b: {
          value: '20000 AMD',
          tooltipText: 'Totals of External Id'
        },
        x: {
          value: '20000 AMD',
          tooltipText: 'Totals of External Id'
        },
        n: {
          value: '20000 AMD',
          tooltipText: 'Totals of External Id'
        },
        c: {
          value: '20000 AMD',
          tooltipText: 'Totals of External Id'
        }
      })}
      isWithSelection={false}
    />
  );
};
