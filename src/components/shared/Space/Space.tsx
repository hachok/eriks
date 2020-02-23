import React, { FunctionComponent } from 'react';
import { SIZE_NUMBER } from 'src/styles/theme';
import { SpaceSizes, SpaceTitles } from 'src/types/styles.types';
import styled from 'src/styles/index';

type ComponentProps = Partial<{ [K in SpaceTitles]: SpaceSizes }> & {
  [key: string]: any;
};

const Space: FunctionComponent<ComponentProps> = ({ children, ...props }: ComponentProps) => {
  for (const key of Object.keys(props)) {
    props[key] = props[key] * SIZE_NUMBER;
  }
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div<ComponentProps>`
  display: flex;
  flex-direction: column;
  ${(props) => `
        padding: ${props.p}px;
        padding-top: ${props.pt}px;
        padding-bottom: ${props.pb}px;
        padding-right: ${props.pr}px;
        padding-left: ${props.pl}px;

        margin: ${props.m}px;
        padding-top: ${props.mt}px;
        padding-bottom: ${props.mb}px;
        padding-right: ${props.mr}px;
        padding-left: ${props.ml}px;
    `};
`;

export default Space;
