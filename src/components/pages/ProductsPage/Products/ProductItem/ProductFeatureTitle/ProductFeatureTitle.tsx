import React from 'react';
import { ProductRow } from 'src/components/pages/ProductsPage/Products/ProductItem/ProductItem.styled';
import { IFeature } from 'src/types/products.types';
import { useSelector } from 'react-redux';

interface Props {
  feature: IFeature;
}

const ProductFeatureTitle = ({ feature }: Props) => {
  return <ProductRow isHighLighted={false}>{feature.title}</ProductRow>;
};

export default ProductFeatureTitle;
