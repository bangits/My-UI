import { ObjectMock } from '@/types';
import { Hooks } from '@my-ui/react-table';
import { Checkbox, CheckboxProps } from '../checkbox-and-radio-button';

export default function selectionHook<T extends ObjectMock>(hooks: Hooks<T>) {
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
