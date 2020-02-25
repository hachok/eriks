import { css } from 'styled-components';
import { media } from 'src/styles/theme';

const getMixin = (device: string, isFrom: boolean, ...args: any) => {
  let rule = 'max-width';
  if (isFrom) rule = 'min-width';
  // @ts-ignore eslint-disable-next-line no-use-before-define
  return css`@media screen and (${rule}: ${media[device]}px) {${css(...args)};}`;
};

export const useMediaQuery = {
  from: (device: string) => (...args: any) => getMixin(device, true, ...args),
  to: (device: string) => (...args: any) => getMixin(device, false, ...args),
};
