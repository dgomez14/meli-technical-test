const axios = require('axios');
const { formatItems } = require('./utility');

const getItemsByQuery = async query => {
  return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${ query }`)
    .then(async ({ data }) => {
      const items = data.results.slice(0, 4); // Takes the first 4 elements
      const categories = await getCategoriesByIds(items.map(item => item.category_id)); // Fetches the categories' data by its ID's
      return {
        author: {
          name: 'David',
          lastname: 'Gómez'
        },
        categories: [ ...new Set(categories.flat(1)) ], // Remove repeated values
        items: formatItems(items)
      };
    })
    .catch(console.error);
};

const getProductDetail = id => {
  return Promise.all([
      // Fetches the item data along with its description
      axios.get(`https://api.mercadolibre.com/items/${ id }`),
      axios.get(`https://api.mercadolibre.com/items/${ id }/description`)
    ])
    .then(async ([ item, detail ]) => {
      return {
        author: {
          name: 'David',
          lastname: 'Gómez'
        },
        item: {
          id: item.data.id,
          title: item.data.title,
          price: {
            currency: item.data.currency_id,
            amount: item.data.price,
            decimals: item.data.decimals || 0
          },
          picture: item.data.thumbnail,
          condition: item.data.condition,
          free_shipping: item.data.shipping.free_shipping,
          sold_quantity: item.data.sold_quantity,
          description: detail.data.plain_text
        },
        categories: await getCategoriesByIds([item.data.category_id])
      };
    });
};

const getCategoriesByIds = categories => {
  return Promise.all(
    // Make a call to the API for each category and waits until is completed
    categories.map(categoryId => {
      return axios.get(`https://api.mercadolibre.com/categories/${ categoryId }`)
        .then(({ data }) => data.path_from_root.map(category => category.name))
        .catch(console.error);
    })
  );
};

module.exports = {
  getItemsByQuery,
  getProductDetail
};
