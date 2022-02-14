const formatItems = items => {
  return items.map(item => {
    const { id, title, thumbnail, condition, shipping, prices, currency_id, address } = item;
    const { amount, decimals } = prices.prices.shift();

    return {
      id,
      title,
      price: {
        currency: currency_id,
        amount,
        decimals: decimals || 0
      },
      picture: thumbnail,
      condition,
      free_shipping: shipping.free_shipping,
      address
    };
  });
};

const findMostFrequent = array => {
  return array.sort((a, b) => {
      return array.filter(v => v === a).length - array.filter(v => v === b).length;
    })
    .pop();
};

module.exports = {
  formatItems,
  findMostFrequent
};
