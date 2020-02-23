import React from 'react';
import { SidebarWrapper } from 'src/components/pages/ProductsPage/Sidebar/Sidebar.styled';
import Text from 'src/components/shared/Text/Text';
import Filter from 'src/components/pages/ProductsPage/Sidebar/Filter/Filter';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Text fontWeight="600" size="s" color="blue">
        Je selectie
      </Text>
      <Filter />
    </SidebarWrapper>
  );
};

export default Sidebar;
