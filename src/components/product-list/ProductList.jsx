import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../../services/product.service';
import ProductCard from '../product-card/ProductCard';

const ProductList = () => {
  const [ params ] = useSearchParams();
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const query = params.get('q');
    query && fetchProducts(query).then(setProducts);
  }, [ params ]);

  return (
    <div className="container mt-3 pb-3">
      <nav className="breadcrumb offset-1 ps-2 mb-0" aria-label="breadcrumb">
        <ol className="breadcrumb">
          {
            products?.categories?.map((category, idx) => (
              <li key={ idx } className="breadcrumb-item active">{ category }</li>
            ))
          }
        </ol>
      </nav>

      <div className="container mb-3">
        {
          products?.items?.map((product, idx, { length }) => (
            <ProductCard key={ idx } product={ product } last={ idx === length - 1 } />
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;
