import React from 'react';
import { ProductWrapper } from 'src/components/pages/ProductsPage/Products/Products.styled';
import ProductItem from 'src/components/pages/ProductsPage/Products/ProductItem/ProductItem';
import { useSelector } from 'react-redux';
import { getProducts } from 'src/selectors/products.selectors';

const Products = () => {
  const products = useSelector(getProducts);

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
