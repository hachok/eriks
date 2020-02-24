import React from 'react';
import { SidebarWrapper } from 'src/components/pages/ProductsPage/Sidebar/Sidebar.styled';
import Text from 'src/components/shared/Text/Text';
import Filter from 'src/components/pages/ProductsPage/Sidebar/Filter/Filter';
import Space from 'src/components/shared/Space/Space';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Space ml={1}>
        <Text fontWeight="600" size="s" color="blue">
          Je selectie
        </Text>
      </Space>
      <Filter />
    </SidebarWrapper>
  );
};

export default Sidebar;
