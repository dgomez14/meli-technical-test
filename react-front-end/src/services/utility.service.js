export const currencyFormat = num => {
  if ( num === undefined || num === null ) return;
  // Gives format to the price to be like '$ x.xxx'
  return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
