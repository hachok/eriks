import React, { FunctionComponent } from 'react';
import styled from 'src/styles/index';
import { ColorType, FontSizes, TextTypes } from 'src/types/styles.types';
import { getFont, getFontSize } from 'src/styles/fonts';
import { FontsType, FontsStyle } from 'src/types/styles.types';

interface ComponentProps {
  children: React.ReactNode | string;
  tag?: TextTypes;
  size?: keyof FontSizes;
  fontFamily?: FontsType;
  type?: string;
  color?: ColorType;
  fontWeight?: string;
  fontStyle?: FontsStyle;
  opacity?: number;
  underlineColor?: ColorType;
  gutter?: boolean;
  className?: string;
}

const Text: FunctionComponent<ComponentProps> = ({ tag, children, ...rest }) => {
  // @ts-ignore TODO investigate the issue with optional property tag and props types
  const Container = styled[tag]<ComponentProps>`
    ${(props) => getFont(props.fontFamily, props.fontWeight, props.fontStyle)}
    ${(props) => getFontSize(props.size)}
    color: ${(props) => props.theme.colors[props.color]};
    opacity: ${(props) => props.opacity};
    transition: all 300ms ease-in-out;
    ${(props) =>
      props.gutter &&
      `margin-top: 0;
    margin-bottom: 0;`}
    ${(props) =>
      props.underlineColor &&
      `border-bottom: 2px solid ${props.theme.colors[props.underlineColor]}`};
  `;

  return <Container {...rest}>{children}</Container>;
};

Text.defaultProps = {
  tag: 'span',
  type: 'text',
  fontFamily: 'Geomanist',
  color: 'black',
  fontWeight: '400',
  fontStyle: 'normal',
  size: 'l',
  gutter: true,
};

export default Text;
