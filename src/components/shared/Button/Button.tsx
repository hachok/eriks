import React, { FunctionComponent, ReactNode } from 'react';
import { ColorType } from 'src/types/styles.types';
import styled from 'src/styles';

interface ComponentProps {
  children: ReactNode;
  backgroundColor: ColorType;
  type?: 'button' | 'submit' | 'reset';
  onClick?(e: any): void;
}

interface WrapperProps {
  backgroundColor: ColorType;
}

const Button: FunctionComponent<ComponentProps> = ({
  children,
  backgroundColor,
  type,
  onClick,
}: ComponentProps) => (
  <Wrapper onClick={onClick} backgroundColor={backgroundColor} type={type}>
    {children}
  </Wrapper>
);

const Wrapper = styled.button<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  &:focus {
    outline: none;
  }
`;

export default Button;
