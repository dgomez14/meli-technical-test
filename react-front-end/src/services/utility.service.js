export const currencyFormat = num => {
  if ( num === undefined || num === null ) return;
  return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
