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
          x: 'col1'
        }
      ])}
      columns={object('columns', [
        {
          Header: 'Header',
          accessor: 'x'
        }
      ])}
    />
  );
};
