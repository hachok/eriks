import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from 'src/selectors/products.selectors';

const ProductsPage = () => {
  const products = useSelector(getProducts);
  console.log('products', products);

  return (
    <div>
      <div>test</div>
    </div>
  );
};

export default ProductsPage;
