import { css } from 'src/styles';
import { FontSizes, FontsStyle, FontsType } from 'src/types/styles.types';
import { fontSizes } from 'src/styles/theme';

export const getFont = (
  name: FontsType = 'Geomanist',
  fontWeight: string = 'normal',
  fontStyle: FontsStyle = 'normal',
) => `
        font-family: ${name}, sans-serif;
        font-weight: ${fontWeight};
        font-style: ${fontStyle};
    `;

export const getFontSize = (size: keyof FontSizes = 'm') => css`
  ${fontSizes[size]}
`;
