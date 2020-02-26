import React, { FunctionComponent } from 'react';
import { SIZE_NUMBER } from 'src/styles/theme';
import { SpaceSizes, SpaceTitles } from 'src/types/styles.types';
import styled from 'src/styles';

type ComponentProps = Partial<{ [K in SpaceTitles]: SpaceSizes }> & {
  className?: string;
  [key: string]: any;
};

const Space: FunctionComponent<ComponentProps> = ({ children, tag, className, ...props }) => {
  for (const key of Object.keys(props)) {
    props[key] = props[key] * SIZE_NUMBER;
  }
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
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
        margin-top: ${props.mt}px;
        margin-bottom: ${props.mb}px;
        margin-right: ${props.mr}px;
        margin-left: ${props.ml}px;
    `};
`;

export default Space;
