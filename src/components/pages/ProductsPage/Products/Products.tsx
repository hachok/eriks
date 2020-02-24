import React from 'react';
import { IProduct } from 'src/types/products.types';
import { ProductWrapper } from 'src/components/pages/ProductsPage/Products/Products.styled';
import ProductItem from 'src/components/pages/ProductsPage/Products/ProductItem/ProductItem';

interface Props {
  products: IProduct[];
}

const Products = ({ products }: Props) => {
  return (
    <ProductWrapper>
      {!!products.length &&
        products.map(
          (product) => product.display && <ProductItem key={product.id} product={product} />,
        )}
    </ProductWrapper>
  );
};

export default Products;
