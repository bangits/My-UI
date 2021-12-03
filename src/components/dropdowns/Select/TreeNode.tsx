import { SelectProps, Tree } from '@/components';
import { getFlatMap } from '@/helpers';
import { ArrowTop } from '@/icons';
import classNames from 'classnames';
import React, { FC, useMemo, useState } from 'react';
import TreeSelect from './TreeSelect';
import styles from './TreeSelect.module.scss';

export interface TreeNodeProps {
  node: Tree;
  onChange?: (value: number | string, isSelected: boolean) => void;
  index?: number;
  setInput: SelectProps<any, false, any>['onInputChange'];
}

const TreeNode: FC<TreeNodeProps> = ({ node, onChange, index, setInput }) => {
  const [childVisible, setChildVisible] = useState<boolean>();

  const hasChild = node.children ? true : false;

  const quantityOfChildren = useMemo(() => {
    return getFlatMap(node)?.length;
  }, [node]);

  return (
    <li
      className={classNames(styles['Select-Tree-List__Item'], {
        [styles['Select-Tree-List__Item-parent']]: index === 0
      })}
      onClick={() => {
        if (onChange) onChange(node.value, !childVisible);
        setInput?.(node.label, null);
      }}>
      <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
      <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
        <span className={classNames(styles['Select-Tree-List__Item-label'])}>
          <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>{node.label}</span>
        </span>
        <i className={classNames(styles['Select-Tree-List__Item-number'])}>({quantityOfChildren})</i>
        {hasChild && (
          <i
            onClick={() => {
              setChildVisible((v) => !v);
            }}
            className={classNames(styles['Select-Tree-List__Item-arrow'])}>
            <ArrowTop width='10' />
          </i>
        )}
      </span>

      {hasChild && (
        <i
          onClick={() => {
            setChildVisible((v) => !v);

            if (onChange) onChange(node.value, !childVisible);
          }}
          className={classNames(styles['Select-Tree-List__Item-arrow'])}>
          <ArrowTop width='10' />
        </i>
      )}

      {hasChild && childVisible && (
        <ul className={classNames(styles['Select-Tree-List'])}>
          <div className={classNames(styles['Select-Tree'])}>
            <TreeSelect data={node.children} onChange={onChange} />
          </div>
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
