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
        <Route path="/" element={ <App /> }> {/* Base route. Contains the search bar to be visible in all views */}
          <Route path="items/:id" element={ <ProductDetail /> } /> {/* Item detail view */}
          <Route path="items" element={ <ProductList /> } /> {/* Items list view */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
