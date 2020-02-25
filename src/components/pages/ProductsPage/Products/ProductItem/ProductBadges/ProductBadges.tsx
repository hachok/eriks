import React from 'react';
import {
  ProductBadgesImage,
  ProductBadgesWrapper,
} from 'src/components/pages/ProductsPage/Products/ProductItem/ProductBadges/ProductBadges.styled';

interface Props {
  badges: string[];
}

const ProductBadges = ({ badges }: Props) => {
  return (
    <ProductBadgesWrapper>
      {!!badges.length && badges.map((badge) => <ProductBadgesImage key={badge} src={badge} />)}
    </ProductBadgesWrapper>
  );
};

export default ProductBadges;
