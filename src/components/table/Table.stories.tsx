import { IconButton } from '@/components';
import { IconButtonIcon } from '@/icons';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
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
      data={object('data', [
        {
          x: 'col1',
          y: 'asdsda',
          z: 'sdaasd',
          b: 'adsasad',
          n: 'sasfda'
        },
        {
          x: 'col1',
          y: 'asdsda',
          z: 'sdaasd',
          b: 'adsasad',
          n: 'sasfda'
        },
        {
          x: 'col1',
          y: 'asdsda',
          z: 'sdaasd',
          b: 'adsasad',
          n: 'sasfda'
        },
        {
          x: 'col1',
          y: 'asdsda',
          z: 'sdaasd',
          b: 'adsasad',
          n: 'sasfda'
        },
        {
          x: 'col1',
          y: 'asdsda',
          z: 'sdaasd',
          b: 'adsasad',
          n: 'sasfda'
        }
      ])}
      columns={object('columns', [
        {
          Header: 'Header',
          accessor: 'x'
        },
        {
          Header: 'Header23',
          accessor: 'y'
        },
        {
          Header: 'Header23',
          accessor: 'z'
        },
        {
          Header: 'Header23',
          accessor: 'b'
        },
        {
          Header: 'Header23',
          accessor: 'n'
        }
      ])}
      actions={[
        {
          component: IconButton,
          onClick: () => {},
          props: {
            icon: <IconButtonIcon />
          }
        },
        {
          component: IconButton,
          onClick: () => {},
          props: {
            icon: <IconButtonIcon />
          }
        }
      ]}
    />
  );
};
