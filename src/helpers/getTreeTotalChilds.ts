import { Tree } from '@/interfaces';

export function getTreeTotalChilds({ children = [] }: Tree) {
  let totalCount = 0;

  children.map((child) => {
    totalCount++;

    if (child.children && child.children.length) totalCount += getTreeTotalChilds(child);
  });

  return totalCount;
}
