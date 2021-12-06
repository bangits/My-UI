import { SelectProps } from '@/components';
import classNames from 'classnames';
import React, { FC } from 'react';
import TreeNode from './TreeNode';
import styles from './TreeSelect.module.scss';

export interface Tree {
  value: number | string;
  label: string;
  children?: Tree[];
}

export interface TreeSelectProps {
  data: Tree[];
  onChange?: (value: number | string) => void;
  setInput?: SelectProps<any, false, any>['onInputChange'];
}

const TreeSelect: FC<TreeSelectProps> = ({ data, onChange, setInput }) => {
  return (
    <div className={classNames(styles['Select-Tree'], 'Select-Tree', 'Select-Tree--Main')}>
      <ul className={classNames(styles['Select-Tree-List'], 'Select-Tree-List')}>
        {data?.map((tree, idx) => (
          <TreeNode key={idx} node={tree} index={idx} onChange={onChange} setInput={setInput} />
        ))}
      </ul>
    </div>
  );
};

export default TreeSelect;
