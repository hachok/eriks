import React from 'react';
import Text from 'src/components/shared/Text/Text';
import Space from 'src/components/shared/Space/Space';
import {
  FilterItemBottom,
  FilterItemTop,
  FilterRow,
  FilterWrapper,
} from 'src/components/pages/ProductsPage/Sidebar/Filter/Filter.styled';
import { useSelector } from 'react-redux';
import { getProducts } from 'src/selectors/products.selectors';
import { ProductRow } from 'src/components/pages/ProductsPage/Products/ProductItem/ProductItem.styled';

const Filter = () => {
  const products = useSelector(getProducts);
  return (
    <FilterWrapper>
      <FilterItemTop>
        <Space mt={1}>
          {!!products.length &&
            products.map((product) => (
              <FilterRow key={product.id}>
                <input type="checkbox" checked={true} />
                <Space ml={1}>
                  <Text size="xs" fontWeight="600">
                    {product.name}
                  </Text>
                </Space>
              </FilterRow>
            ))}
        </Space>
      </FilterItemTop>
      <FilterItemBottom>
        <ProductRow>Ken1</ProductRow>
        <ProductRow>Ken</ProductRow>
        <ProductRow>Ken</ProductRow>
        <ProductRow>Ken</ProductRow>
        <ProductRow>Ken</ProductRow>
        <ProductRow>Ken</ProductRow>
        <ProductRow>Ken</ProductRow>
        <ProductRow>Ken</ProductRow>
      </FilterItemBottom>
    </FilterWrapper>
  );
};

export default Filter;
