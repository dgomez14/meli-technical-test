import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import ProductDetail from './components/product-detail/ProductDetail';
import ProductList from './components/product-list/ProductList';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
          <Route index element={ <ProductList /> } />
          <Route path="items/:id" element={ <ProductDetail /> } />
          <Route path="items" exact element={ <ProductList /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
