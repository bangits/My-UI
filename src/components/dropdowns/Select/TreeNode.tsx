import { SelectProps, Tree } from '@/components';
import { getFlatMap } from '@/helpers';
import { ArrowBottom, ArrowTop } from '@/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useMemo, useState } from 'react';
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

  const closeMenuOnClick = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    (e.target as Element).closest('.MyUI-Select').querySelector('input').blur();
  }, []);

  return (
    <li
      className={classNames(styles['Select-Tree-List__Item'], 'Select-Tree-List__Item', {
        [styles['Select-Tree-List__Item-Parent']]: index === 0,
        'Select-Tree-List__Item-Parent': index === 0
      })}>
      <i className={classNames(styles['Select-Tree-List__Item-Chain'], 'Select-Tree-List__Item-Chain')}></i>
      <span className={classNames(styles['Select-Tree-List__Item-Inner'], 'Select-Tree-List__Item-Inner')}>
        <span className={classNames(styles['Select-Tree-List__Item-Label'], 'Select-Tree-List__Item-Label')}>
          <span
            onClick={(e) => {
              if (onChange) onChange(node.value, !childVisible);
              setInput?.(node.label, null);
              closeMenuOnClick(e);
            }}
            className={classNames(styles['Select-Tree-List__Item-Label-Inner'], 'Select-Tree-List__Item-Label-Inner')}>
            {node.label}
          </span>
        </span>
        <i className={classNames(styles['Select-Tree-List__Item-Number'], 'Select-Tree-List__Item-Number')}>
          ({quantityOfChildren})
        </i>
        {hasChild && (
          <i
            onClick={() => {
              setChildVisible((v) => !v);
            }}
            className={classNames(styles['Select-Tree-List__Item-Arrow'], 'Select-Tree-List__Item-Arrow')}>
            {!childVisible ? <ArrowBottom width='9' /> : <ArrowTop width='9' />}
          </i>
        )}
      </span>

      {hasChild && (
        <i
          onClick={() => {
            setChildVisible((v) => !v);
          }}
          className={classNames(styles['Select-Tree-List__Item-Arrow'], 'Select-Tree-List__Item-Arrow')}>
          {!childVisible ? <ArrowBottom width='9' /> : <ArrowTop width='9' />}
        </i>
      )}

      {hasChild && childVisible && (
        <div className={classNames(styles['Select-Tree'], 'Select-Tree')}>
          <ul className={classNames(styles['Select-Tree-List'], 'Select-Tree-List')}>
            <TreeSelect data={node.children} onChange={onChange} setInput={setInput} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default TreeNode;
