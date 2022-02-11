import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';

const ProductList = () => {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ params] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const query = params.get('q');
      if (query) {
        const searchResult = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${ query }`)
          .then(res => res.json())
          .then(res => res.results)
          .then(res => res);
        setProducts(searchResult);
      }
    };

    fetchProducts().then();
  }, [ params ]);

  useEffect(() => {
    const fetchCategory = async () => {
      const categoryId = findMostFrequent(products);
      if (categoryId) {
        const category = await fetch(`https://api.mercadolibre.com/categories/${ categoryId }`)
          .then(res => res.json())
          .then(res => res.path_from_root);
        setCategories(category.map(c => c.name));
      }
    };
    fetchCategory().then();
  }, [ products ]);

  const findMostFrequent = array => {
    return array
      .map(p => p.category_id)
      .sort((a, b) => {
        return array.filter(v => v === a).length - array.filter(v => v === b).length;
      })
      .pop();
  };

  return (
    <div className="container mt-3 pb-3">
      <nav className="breadcrumb offset-1 ps-2 mb-0" aria-label="breadcrumb">
        <ol className="breadcrumb">
          {
            categories.map((category, idx) => (
              <li key={ idx } className="breadcrumb-item active">{ category }</li>
            ))
          }
        </ol>
      </nav>

      <div className="container mb-3">
        {
          products.map((product, idx, { length }) => (
            <ProductCard key={ idx } product={ product } last={ idx === length - 1 }/>
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;
