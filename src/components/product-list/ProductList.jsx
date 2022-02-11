import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCategory, fetchProducts } from '../../services/product.service';
import { findMostFrequent } from '../../services/utility.service';
import ProductCard from '../product-card/ProductCard';

const ProductList = () => {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ params ] = useSearchParams();

  useEffect(() => {
    const query = params.get('q');
    query && fetchProducts(query).then(setProducts);
  }, [ params ]);

  useEffect(() => {
    const categoryId = findMostFrequent(products.map(p => p.category_id));
    categoryId && fetchCategory(categoryId).then(setCategories);
  }, [ products ]);

  return (
    <div className="container mt-3 pb-3">
      <nav className="breadcrumb offset-1 ps-2 mb-0" aria-label="breadcrumb">
        <ol className="breadcrumb">
          {
            categories.map((category, idx) => (
              <li key={ idx } className="breadcrumb-item active">{ category.name }</li>
            ))
          }
        </ol>
      </nav>

      <div className="container mb-3">
        {
          products.map((product, idx, { length }) => (
            <ProductCard key={ idx } product={ product } last={ idx === length - 1 } />
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;
