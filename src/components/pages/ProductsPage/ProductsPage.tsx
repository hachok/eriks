import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'src/selectors/products.selectors';
import * as productsActions from 'src/actions/products.actions';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(productsActions.loadProductsAsync.request());
  }, [dispatch]);

  return (
    <div>
      <div>
        {!!products.length &&
          products.map((product, index) => <div key={index}>{product.Toepassing}</div>)}
      </div>
    </div>
  );
};

export default ProductsPage;
