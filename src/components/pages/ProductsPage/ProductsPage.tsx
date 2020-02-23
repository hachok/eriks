import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'src/selectors/products.selectors';
import * as productsActions from 'src/actions/products.actions';
import Text from 'src/components/shared/Text/Text';
import Sidebar from 'src/components/pages/ProductsPage/Sidebar/Sidebar';
import { Container } from 'src/components/App.styled';
import Space from 'src/components/shared/Space/Space';
import Products from 'src/components/pages/ProductsPage/Products/Products';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(productsActions.loadProductsAsync.request());
  }, [dispatch]);

  return (
    <Fragment>
      <header>
        <Space pt={2} pb={2} pl={1}>
          <Text tag="h2" color="blue" fontWeight="600" size="l">
            4 producten vergelijken
          </Text>
        </Space>
      </header>
      <Container>
        <Sidebar />
        <Products products={products} />
      </Container>
    </Fragment>
  );
};

export default ProductsPage;
