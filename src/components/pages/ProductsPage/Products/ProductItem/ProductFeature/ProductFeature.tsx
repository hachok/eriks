import React from 'react';
import { ProductRow } from 'src/components/pages/ProductsPage/Products/ProductItem/ProductItem.styled';
import { IFeature } from 'src/types/products.types';
import { useSelector } from 'react-redux';
import { isHighLighted } from 'src/selectors/products.selectors';

interface Props {
  feature: IFeature;
}

const ProductFeature = ({ feature }: Props) => {
  const highLighted = useSelector(isHighLighted(feature.id));
  return <ProductRow isHighLighted={highLighted}>{feature.value}</ProductRow>;
};

export default ProductFeature;
