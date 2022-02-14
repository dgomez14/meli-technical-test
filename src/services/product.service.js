export const fetchProductDetail = async id => {
  return fetch(`http://localhost:3000/api/items/${ id }`)
    .then(res => res.json());
};

export const fetchProducts = async query => {
  return fetch(`http://localhost:3000/api/items?q=${ query }`)
    .then(res => res.json());
};
