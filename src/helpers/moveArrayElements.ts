export const moveArrayElements = (array, from, to) =>
  array.map((item, i) =>
    i === to ? array[from] : i >= Math.min(from, to) && i <= Math.max(from, to) ? array[i + Math.sign(to - from)] : item
  );
