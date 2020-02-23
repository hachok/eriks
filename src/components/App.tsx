import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ProductsPage from 'src/components/pages/ProductsPage/ProductsPage';
import { GlobalStyle } from 'src/components/App.styled';

const App = () => {
  return (
    <div>
      <Switch>
        <Redirect exact path="/" to="/products" />
        <Route exact path="/products" component={ProductsPage} />
        <Redirect path="*" to="/" />
      </Switch>
      <GlobalStyle />
    </div>
  );
};

export default App;
