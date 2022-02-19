export interface Tree {
  id: number | string;
  name: string;
  children?: Tree[];
}
