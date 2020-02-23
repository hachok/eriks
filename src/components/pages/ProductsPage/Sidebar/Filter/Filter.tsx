import React from 'react';
import Text from 'src/components/shared/Text/Text';
import Space from 'src/components/shared/Space/Space';
import { FilterRow } from 'src/components/pages/ProductsPage/Sidebar/Filter/Filter.styled';
import { useSelector } from 'react-redux';
import { getProducts } from 'src/selectors/products.selectors';

const Filter = () => {
  const products = useSelector(getProducts);
  return (
    <Space mt={1}>
      {!!products.length &&
        products.map((product) => (
          <FilterRow key={product.name}>
            <input type="checkbox" />
            <Space ml={1}>
              <Text size="xs" fontWeight="600">
                {product.name}
              </Text>
            </Space>
          </FilterRow>
        ))}
    </Space>
  );
};

export default Filter;
