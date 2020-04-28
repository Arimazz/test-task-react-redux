import React from 'react';
import './style.css';
import { AddProduct } from '../AddProduct/AddProduct';
import { ProductList } from '../ProductList';

export const App = () => (
  <div className="app-wrapper">
    <AddProduct />
    <ProductList />
  </div>
);
