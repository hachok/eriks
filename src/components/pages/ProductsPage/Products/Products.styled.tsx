import styled from 'src/styles';

export const ProductWrapper = styled.div`
  display: flex;
  padding-top: ${(props) => `${props.theme.space[4]}`};
  width: 100%;
  justify-content: stretch;
`;
