import { Hooks } from '@my-ui/react-table';
import { Checkbox, CheckboxProps } from '../checkbox-and-radio-button';

export default function selectionHook<T extends {}>(hooks: Hooks<T>) {
  hooks.visibleColumns.push((columns) => [
    {
      id: 'selection',
      Header: ({ getToggleAllRowsSelectedProps }: { getToggleAllRowsSelectedProps: () => CheckboxProps }) => (
        <>
          <Checkbox {...getToggleAllRowsSelectedProps()} />
        </>
      ),
      Cell: ({ row }) => (
        <>
          <Checkbox {...row.getToggleRowSelectedProps()} />
        </>
      ),
      disableSortBy: true
    },
    ...columns
  ]);
}
