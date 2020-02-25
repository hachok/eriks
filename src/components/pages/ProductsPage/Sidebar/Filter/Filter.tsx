import React from 'react';
import Text from 'src/components/shared/Text/Text';
import Space from 'src/components/shared/Space/Space';
import {
  FilterItemBottom,
  FilterItemTop,
  FilterRow,
  FilterWrapper,
} from 'src/components/pages/ProductsPage/Sidebar/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'src/selectors/products.selectors';
import { ProductRow } from 'src/components/pages/ProductsPage/Products/ProductItem/ProductItem.styled';
import { toggleProduct } from 'src/actions/products.actions';
import ProductFeatureTitle from 'src/components/pages/ProductsPage/Products/ProductItem/ProductFeatureTitle/ProductFeatureTitle';

const Filter = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  const onCheckboxChange = (id: string) => {
    dispatch(toggleProduct({ id }));
  };

  return (
    <FilterWrapper>
      <FilterItemTop>
        <Space mt={1}>
          {!!products.length &&
            products.map((product) => (
              <FilterRow key={product.id}>
                <input
                  type="checkbox"
                  onChange={() => onCheckboxChange(product.id)}
                  checked={product.display}
                />
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
        <Space mt={2}>
          {!!products.length && products[0].badges && <ProductRow>Keurmerk</ProductRow>}
          {!!products.length &&
            !!products[0]?.features.length &&
            products[0]?.features.map((feature) => <ProductFeatureTitle feature={feature} />)}
        </Space>
      </FilterItemBottom>
    </FilterWrapper>
  );
};

export default Filter;
