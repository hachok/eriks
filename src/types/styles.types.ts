export type ColorType =
  | 'white'
  | 'dark'
  | 'dusk'
  | 'pink'
  | 'blue'
  | 'green'
  | 'black'
  | 'grey'
  | 'lightPink'
  | 'lightBlue'
  | 'lightGrey'
  | 'lightMidGrey'
  | 'lightGreyBlue'
  | 'deepSkyBlue'
  | 'darkWhite';

export type ColorsType = { [K in ColorType]: string };

export interface FontSizes {
  xxl: string;
  xl: string;
  l: string;
  m: string;
  s: string;
  xs: string;
}

export enum DeviceTypes {
  mobile = 'mobile',
  tablet = 'tablet',
  laptop = 'laptop',
  desktop = 'desktop',
  desktopWide = 'desktopWide',
}

export type FontsType = 'Geomanist' | 'CircularStd' | 'SF-Pro-Display' | 'Roboto';

export type IconType = 'shop';

export type FontsStyle = 'normal' | 'italic';

export type TextTypes = 'a' | 'p' | 'b' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type BlockTypes = 'span' | 'div';

export type SpaceTitles = 'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'm' | 'mt' | 'mb' | 'ml' | 'mr';

export type SpaceSizes = 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 14 | 15;

export type MediaTypes = { [K in DeviceTypes]: number };
