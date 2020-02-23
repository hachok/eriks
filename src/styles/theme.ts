// JS reimplementation of Style Closet scales for use in styled-components

import { ColorsType, FontSizes } from 'src/types/styles.types';

export const SIZE_NUMBER = 8;

export const media = {
  mobile: 320,
  tablet: 769,
  laptop: 1025,
  desktop: 1280,
  desktopWide: 1360,
};

export const colors: ColorsType = {
  white: '#ffffff',
  dark: '#1E2832',
  dusk: '#00cc9a',
  pink: '#fc5185',
  blue: '#005ca9',
  green: '#3fc1c9',
  black: '#000000',
  grey: '#485f78',
  lightGrey: '#d8d8d8',
  lightMidGrey: '#d8d8d8',
  lightPink: '#f3f4f8',
  lightBlue: '#e1e5eb',
  lightGreyBlue: '#e1e5eb',
  deepSkyBlue: '#0084ff',
  darkWhite: '#96aac3',
};

const breakpoints: ReadonlyArray<string> = ['31.25em', '43.75em', '46.875em'];

const space = ['0', '4px', '8px', '16px', '24px', '32px', '40px'];

export const fontSizes: FontSizes = {
  xxl: `
      font-size: 1.6rem;
    `,
  xl: `
      font-size: 1.4rem;
    `,
  l: `
      font-size: 1.2rem;
    `,
  m: `
      font-size: 1.0625rem;
    `,
  s: `
      font-size: 1rem;
    `,
  xs: `
      font-size: 0.8rem;
    `,
};

export interface IStyleClosetTheme {
  breakpoints: ReadonlyArray<string>;
  fontSizes: FontSizes;
  space: string[];
  colors: { [key in keyof typeof colors]: string };
}

const theme: IStyleClosetTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
};

export { theme };
