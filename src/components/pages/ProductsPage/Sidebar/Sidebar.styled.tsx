import styled from 'src/styles';

export const SidebarWrapper = styled.aside`
  flex: 0 0 20%;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  padding: ${(props) => `${props.theme.space[4]} ${props.theme.space[2]}`};
`;
