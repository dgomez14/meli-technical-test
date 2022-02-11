const ProductCard = ({ product, last }) => {
  const currencyFormat = num => {
    return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <div className="card border-0 rounded-0 col-10 offset-1">
      <div className={ `${ !last ? 'border-bottom' : '' } py-3 mx-3` }>
        <div className="row g-0">
          <div className="col-md-2">
            <img src={ product.thumbnail } width="180px" height="180px" className="img-fluid rounded-start"
                 alt={ product.title }/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ currencyFormat(product.price) }</h5>
              <p className="card-text">{ product.title }</p>
            </div>
          </div>
          <div className="col-md-2">
            <p className="card-text"><small className="text-muted">{ product.address.city_name }</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
