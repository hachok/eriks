import styled from 'src/styles';

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const FilterItemTop = styled.div`
  flex: 1 0 auto;
  padding: 0 ${(props) => props.theme.space[1]};
`;

export const FilterItemBottom = styled.div`
  flex: 0 0 auto;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
