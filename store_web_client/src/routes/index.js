import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from '../components/product/productContainers/ProductList';
import AddProduct from '../components/product/productContainers/AddProduct';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/addProduct" exact component={AddProduct} />
    </Switch>
  </BrowserRouter>
);
