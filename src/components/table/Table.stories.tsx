import { IconButton } from '@/components';
import { Status } from '@/components/others';
import { Edit, View } from '@/icons';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Table from './Table';

export default {
  component: Table,
  decorators: [withKnobs],
  title: 'components/Table/Table'
};

export const Default = () => {
  return (
    <Table
      fetch={action('fetch')}
      data={[
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='active'>Active</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        },
        {
          x: (
            <img src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270' />
          ),
          y: 'ID1234567',
          z: 'ID1234567',
          b: '20BurningHot',
          n: 'EGT',
          w: '12/07/2021,12:00:00',
          e: 'Mobile Desktop',
          r: <Status variant='blocked'>Blocked</Status>,
          v: 'Mobile, Desktop',
          c: 'Slots'
        }
      ]}
      columns={[
        {
          Header: 'Icon',
          accessor: 'x',
          maxWidth: '6rem'
        },
        {
          Header: 'Game Id',
          accessor: 'y',
          maxWidth: '10.4rem'
        },
        {
          Header: 'External Id',
          accessor: 'z',
          maxWidth: '10.4rem'
        },
        {
          Header: 'Game Name',
          accessor: 'b',
          maxWidth: '12rem'
        },
        {
          Header: 'Provider Id',
          accessor: 'n',
          maxWidth: '10.1rem'
        },
        {
          Header: 'Category',
          accessor: 'c',
          maxWidth: '8.9rem'
        },
        {
          Header: 'Version',
          accessor: 'v',
          maxWidth: '7.6rem'
        },
        {
          Header: 'Release date and time',
          accessor: 'w',
          maxWidth: '18.2rem'
        },
        {
          Header: 'User status',
          accessor: 'r',
          maxWidth: '18.2rem'
        }
      ]}
      actions={[
        {
          component: IconButton,
          onClick: () => {},
          props: {
            icon: <View />
          }
        },
        {
          component: IconButton,
          onClick: () => {},
          props: {
            icon: <Edit />
          }
        }
      ]}
    />
  );
};
