import styled from 'src/styles';
import { DeviceTypes } from 'src/types/styles.types';
import { useMediaQuery } from 'src/utils/media';

export const SidebarWrapper = styled.aside`
  flex: 0 0 20%;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  padding: ${(props) => `${props.theme.space[4]} 0 0`};
  display: flex;
  flex-direction: column;
  min-width: 220px;

  ${useMediaQuery.to(DeviceTypes.mobile)`
    width: 150px;
  `}
`;
