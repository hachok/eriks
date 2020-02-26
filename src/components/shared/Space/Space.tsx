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
  ${(props) => props.p && `padding: ${props.p}px;`}
  
  ${(props) => props.pt && `padding-top: ${props.pt}px;`}
  ${(props) => props.pb && `padding-bottom: ${props.pb}px;`}
  ${(props) => props.pr && `padding-right: ${props.pr}px;`}
  ${(props) => props.pl && `padding-left: ${props.pl}px;`}
  
  ${(props) => props.m && `margin: ${props.m}px;`}
  
  ${(props) => props.mt && `margin-top: ${props.mt}px;`}
  ${(props) => props.mb && `margin-bottom: ${props.mb}px;`}
  ${(props) => props.mr && `margin-right: ${props.mr}px;`}
  ${(props) => props.ml && `margin-left: ${props.ml}px;`}
   
`;

export default Space;
