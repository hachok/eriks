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
  'light-grey': '#f6f7fc',
  'light-mid-grey': '#d8d8d8',
  'light-pink': '#f3f4f8',
  'light-blue': '#e1e5eb',
  'light-grey-blue': '#e1e5eb',
  'deep-sky-blue': '#0084ff',
  'dark-white': '#96aac3',
};

const breakpoints: ReadonlyArray<string> = ['31.25em', '43.75em', '46.875em'];

export const fontSizes: FontSizes = {
  xxl: `
      font-size: 1.2rem;
    `,
  xl: `
      font-size: 1.2rem;
    `,
  l: `
      font-size: 1.6rem;
      line-height: 2.4rem;

      @media screen and (min-width: ${media['tablet']}px) {
        font-size: 1.8rem;
        line-height: 2.8rem;
      }
    `,
  m: `
      font-size: 1.0625rem;
    `,
  s: `
      font-size: 1.3rem;
      line-height: 2.4rem;

      @media screen and (min-width: ${media['tablet']}px) {
        line-height: 2.8rem;
      }
    `,
  xs: `
      font-size: 1.2rem;
    `,
};

export interface IStyleClosetTheme {
  breakpoints: ReadonlyArray<string>;
  fontSizes: FontSizes;
  colors: { [key in keyof typeof colors]: string };
}

const theme: IStyleClosetTheme = {
  breakpoints,
  fontSizes,
  colors,
};

export { theme };
