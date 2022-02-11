export const currencyFormat = num => {
  return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const findMostFrequent = array => {
  return array.sort((a, b) => {
      return array.filter(v => v === a).length - array.filter(v => v === b).length;
    })
    .pop();
};
