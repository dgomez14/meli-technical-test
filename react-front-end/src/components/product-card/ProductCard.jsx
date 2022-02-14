import { useNavigate } from 'react-router-dom';
import { currencyFormat } from '../../services/utility.service';

const ProductCard = ({ product, last }) => {
  const navigate = useNavigate();
  const goToProduct = id => navigate(`/items/${ id }`); // Triggers the navigation when the card is clicked

  return (
    <div className="card border-0 rounded-0 col-10 offset-1" style={ { cursor: 'pointer' } }
         onClick={ goToProduct.bind(null, product.id) }>
      <div className={ `${ !last ? 'border-bottom' : '' } py-3 mx-3` }>
        <div className="row g-0">
          <div className="col-md-2">
            <img src={ product.picture } width="180px" height="180px" className="img-fluid rounded-start"
                 alt={ product.title } />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ currencyFormat(product.price.amount) }</h5> {/* Prints the price formatted */}
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
