export const copyAttrs = (source: Element, target: Element) => {
  Object.values(source.attributes).forEach((attr) => {
    target.setAttribute(attr.nodeName === 'id' ? 'data-id' : attr.nodeName, attr.nodeValue);
  });
};
