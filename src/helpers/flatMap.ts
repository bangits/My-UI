export function getFlatMap({ value, children = [] }) {
  return [value].concat(...children?.map(getFlatMap));
}
