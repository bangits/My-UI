import { MutableRefObject } from 'react';

const DEFAULT_COLOR = '#000000';

const rgbToHex = (r: number, g: number, b: number): string => {
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  return '#' + rHex + gHex + bHex;
};

export const convertColorToHex = (
  event: React.ChangeEvent<HTMLInputElement>,
  {
    inputRef,
    pickerRef
  }: {
    inputRef: MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;
    pickerRef: MutableRefObject<HTMLSpanElement>;
  }
): string | null => {
  const color = inputRef.current?.value;
  const element = pickerRef.current;

  const inputValue = event.target.value ?? color;

  element.style.color = inputValue;

  const computedColor = getComputedStyle(element).color;
  const formattedColor = computedColor.replace(/\s/g, '').toLowerCase();

  if (!inputValue?.includes(',') && !inputValue?.includes('#')) {
    const rgbValues = formattedColor.match(/^rgb?\((\d+),(\d+),(\d+)/i);
    const valid = CSS.supports('color', inputValue);
    if (valid) {
      const hexValues = rgbToHex(Number(rgbValues[1]), Number(rgbValues[2]), Number(rgbValues[3]));
      element.style.backgroundColor = hexValues;
      return hexValues;
    } else {
      element.style.backgroundColor = DEFAULT_COLOR;
      return null;
    }
  } else if (inputValue?.includes(',') && !inputValue?.includes('#')) {
    const formattedToRgb = inputValue.split(',');
    if (formattedToRgb.length === 3 && !formattedToRgb.some((elem) => Number(elem) > 255)) {
      const hexValues = rgbToHex(Number(formattedToRgb[0]), Number(formattedToRgb[1]), Number(formattedToRgb[2]));

      element.style.backgroundColor = hexValues;

      return hexValues;
    } else {
      element.style.backgroundColor = DEFAULT_COLOR;
      return null;
    }
  } else if (!inputValue?.includes(',') && inputValue?.includes('#')) {
    const validHex = /^#([0-9A-F]{3}){1,2}$/i.test(inputValue);
    if (validHex) {
      element.style.backgroundColor = inputValue;
      return inputValue;
    } else {
      element.style.backgroundColor = DEFAULT_COLOR;
      return null;
    }
  }
  element.style.backgroundColor = DEFAULT_COLOR;
  return null;
};
