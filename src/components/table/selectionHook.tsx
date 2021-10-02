import { Hooks } from 'react-table';
import { Checkbox, CheckboxProps } from '../checkbox-and-radio-button';

export default function selectionHook<T extends object>(hooks: Hooks<T>) {
  hooks.visibleColumns.push((columns) => [
    {
      id: 'selection',
      Header: ({ getToggleAllRowsSelectedProps }: { getToggleAllRowsSelectedProps: () => CheckboxProps }) => (
        <div>
          <Checkbox {...getToggleAllRowsSelectedProps()} />
        </div>
      ),
      Cell: ({ row }) => (
        <div>
          <Checkbox {...row.getToggleRowSelectedProps()} />
        </div>
      ),
      disableSortBy: true
    },
    ...columns
  ]);
}
