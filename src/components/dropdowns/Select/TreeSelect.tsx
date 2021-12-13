import { SelectProps } from '@/components';
import classNames from 'classnames';
import React, { FC } from 'react';
import TreeNode from './TreeNode';
import styles from './TreeSelect.module.scss';

export interface Tree {
  id: number | string;
  name: string;
  children?: Tree[];
}

export interface TreeSelectProps {
  data: Tree[];
  onChange?: (value: number | string) => void;
  setInput?: SelectProps<any, false, any>['onInputChange'];
  className?: string;
}

const TreeSelect: FC<TreeSelectProps> = ({ data, onChange, setInput, className }) => {
  return (
    <div
      className={classNames(
        styles['Select-Tree'],
        styles['Select-Tree--Main'],
        'Select-Tree',
        'Select-Tree--Main',
        className
      )}>
      <ul className={classNames(styles['Select-Tree-List'], 'Select-Tree-List')}>
        {data?.map((tree, idx) => (
          <TreeNode key={idx} node={tree} index={idx} onChange={onChange} setInput={setInput} />
        ))}
      </ul>
    </div>
  );
};

export default TreeSelect;
