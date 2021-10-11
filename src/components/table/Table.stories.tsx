import { IconButton } from '@/components';
import { IconButtonIcon, View, Edit } from '@/icons';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import Table from './Table';
import Status from '@/components/Status/Status';

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
          align: 'right'
        },
        {
          Header: 'User status',
          accessor: 'r'
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
