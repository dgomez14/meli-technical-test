export const fetchProductDetail = async id => {
  return fetch(`https://api.mercadolibre.com/items/${ id }`).then(res => res.json());
};

export const fetchProductDescription = async id => {
  return fetch(`https://api.mercadolibre.com/items/${ id }/description`).then(res => res.json());
};

export const fetchCategory = async categoryId => {
  return fetch(`https://api.mercadolibre.com/categories/${ categoryId }`)
    .then(res => res.json())
    .then(res => res.path_from_root);
};

export const fetchProducts = async query => {
  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${ query }`)
    .then(res => res.json())
    .then(res => res.results)
    .then(res => res.splice(0, 4));
};
