import { IconButton, Status } from '@/components';
import { EditIcon, IllustrationIcon, ViewIcon } from '@/icons';
import { action } from '@storybook/addon-actions';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import Table from './Table';

export default {
  component: Table,
  decorators: [withKnobs],
  title: 'components/Table/Table'
};

export const Default = () => {
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
    }
  ]);

  return (
    <Table
      onSelectedColumnsChange={console.log}
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
      loadingRowsIds={object('loadingRowsIds', [])}
      columns={object('columns', [
        {
          Header: 'Icon',
          accessor: 'x'
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
          maxWidth: '8rem',
          dataMaxWidth: '9rem'
        }
      ])}
      actions={[
        {
          component: IconButton,
          onClick: () => {},
          props: {
            icon: <ViewIcon />
          }
        },
        {
          component: IconButton,
          onClick: () => {},
          props: {
            icon: <EditIcon />
          },
          shouldShow: (column) => {
            console.log(column);

            return true;
          }
        }
      ]}
      illustrationIcon={<IllustrationIcon />}
      emptyText='You don’t have any users added! Please add a user.'
    />
  );
};
