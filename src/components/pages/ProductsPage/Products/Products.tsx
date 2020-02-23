import React from 'react';
import { IProduct } from 'src/types/products.types';
import { ProductWrapper } from 'src/components/pages/ProductsPage/Products/Products.styled';

interface Props {
  products: IProduct[];
}

const Products = ({ products }: Props) => {
  return (
    <ProductWrapper>
      {!!products.length &&
        products.map((product, index) => <div key={index}>{product.Toepassing}</div>)}
    </ProductWrapper>
  );
};

export default Products;
