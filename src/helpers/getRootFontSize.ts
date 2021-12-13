export const getRootFontSize = () =>
  Number(window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px', '')) || 10;
