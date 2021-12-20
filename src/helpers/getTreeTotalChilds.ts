export interface Tree {
  id: number | string;
  name: string;
  children?: Tree[];
}

export function getTreeTotalChilds({ children = [] }: Tree) {
  let totalCount = 0;

  children.map((child) => {
    totalCount++;

    if (child.children && child.children.length) totalCount += getTreeTotalChilds(child);
  });

  return totalCount;
}
