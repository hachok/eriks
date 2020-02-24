import React from 'react';
import {
  ProductImage,
  ProductImageWrapper,
  ProductItemBottom,
  ProductItemTop,
  ProductItemWrapper,
  ProductRow,
} from 'src/components/pages/ProductsPage/Products/ProductItem/ProductItem.styled';
import { IProduct } from 'src/types/products.types';
import Text from 'src/components/shared/Text/Text';
import Space from 'src/components/shared/Space/Space';
import { Separator } from 'src/components/App.styled';
import ProductBadges from 'src/components/pages/ProductsPage/Products/ProductItem/ProductBadges/ProductBadges';

interface Props {
  product: IProduct;
}

const ProductItem = ({ product }: Props) => {
  return (
    <ProductItemWrapper>
      <ProductItemTop>
        <Space pr={1} pl={1}>
          <ProductImageWrapper>
            <ProductImage src={product.productImage} />
          </ProductImageWrapper>
          <Text fontWeight="600" size="s" color="blue">
            {product.name}
          </Text>
        </Space>
      </ProductItemTop>
      <ProductItemBottom>
        <Space mt={2} pr={1} pl={1}>
          <Text fontWeight="600" size="s">
            {product.grossPrice}
          </Text>
          <Text fontWeight="600" color="lightGrey" size="xs">
            per stuck/excl btw
          </Text>
          <Separator />
        </Space>
        {product.badges && (
          <ProductRow>
            <ProductBadges badges={product.badges} />
          </ProductRow>
        )}
        {product.features &&
          product.features.map((feature) => (
            <ProductRow isHighLighted={feature.isHighLighted}>{feature.value}</ProductRow>
          ))}
      </ProductItemBottom>
    </ProductItemWrapper>
  );
};

export default ProductItem;
