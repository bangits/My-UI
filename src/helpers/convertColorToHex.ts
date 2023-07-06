import { knownColors } from '@/constants';
import { MutableRefObject } from 'react';

const DEFAULT_COLOR = '#000000';

const rgbToHex = (r: number, g: number, b: number): string => {
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  return '#' + rHex + gHex + bHex;
};

const findKnownColor = (colorName: string) => {
  const colorValue = colorName?.replace(/\s/g, '')?.toLowerCase();
  const value = Object.keys(knownColors).find((key) => key?.replace(/\s/g, '')?.toLowerCase() === colorValue);

  return value ? { textName: value, hexValue: knownColors[value] } : undefined;
};

export const convertColorToHex = (
  value: string,
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

  const inputValue = value ?? color;

  element.style.color = inputValue;

  const computedColor = getComputedStyle(element).color;
  const formattedColor = computedColor.replace(/\s/g, '').toLowerCase();

  if (!inputValue?.includes(',') && !inputValue?.includes('#')) {
    const rgbValues = formattedColor.match(/^rgb?\((\d+),(\d+),(\d+)/i);
    const valid = CSS.supports('color', inputValue);
    const knownColorValue = findKnownColor(inputValue);
    if (knownColorValue) {
      element.style.backgroundColor = knownColorValue.hexValue;
      return knownColorValue.hexValue;
    } else if (valid) {
      const hexValues = rgbToHex(Number(rgbValues[1]), Number(rgbValues[2]), Number(rgbValues[3]));
      element.style.backgroundColor = hexValues;
      return hexValues;
    } else {
      element.style.backgroundColor = DEFAULT_COLOR;
      return null;
    }
  } else if (inputValue?.includes(',') && !inputValue?.includes('#')) {
    const formattedToRgb = inputValue.replace(/\s/g, '').match(/^rgb\((\d+),(\d+),(\d+)\)$/i);

    if (formattedToRgb) {
      const r = Number(formattedToRgb[1]);
      const g = Number(formattedToRgb[2]);
      const b = Number(formattedToRgb[3]);

      if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        const hexValues = rgbToHex(r, g, b);
        element.style.backgroundColor = hexValues;
        return hexValues;
      }
    }

    return null;
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
