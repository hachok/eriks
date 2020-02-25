import React, { FunctionComponent } from 'react';
import { SIZE_NUMBER } from 'src/styles/theme';
import { BlockTypes, SpaceSizes, SpaceTitles } from 'src/types/styles.types';
import styled from 'src/styles';

type ComponentProps = Partial<{ [K in SpaceTitles]: SpaceSizes }> & {
  tag?: BlockTypes;
  className?: string;
  [key: string]: any;
};

const Space: FunctionComponent<ComponentProps> = ({ children, tag, ...props }) => {
  for (const key of Object.keys(props)) {
    props[key] = props[key] * SIZE_NUMBER;
  }
  // @ts-ignore TODO investigate the issue with optional property tag and props types
  const Wrapper = styled[tag]<ComponentProps>`
    display: flex;
    flex-direction: column;
    ${(props) => `
        padding: ${props.p}px;
        padding-top: ${props.pt}px;
        padding-bottom: ${props.pb}px;
        padding-right: ${props.pr}px;
        padding-left: ${props.pl}px;

        margin: ${props.m}px;
        margin-top: ${props.mt}px;
        margin-bottom: ${props.mb}px;
        margin-right: ${props.mr}px;
        margin-left: ${props.ml}px;
    `};
  `;

  return <Wrapper {...props}>{children}</Wrapper>;
};

Space.defaultProps = {
  tag: 'div',
};

export default Space;
