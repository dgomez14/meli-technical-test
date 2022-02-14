import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../services/product.service';
import { currencyFormat } from '../../services/utility.service';

const ProductDetail = () => {
  const { id } = useParams();
  const [ product, setProduct ] = useState();

  useEffect(() => {
    fetchProductDetail(id).then(setProduct); // Calls the function that retrieves the item pass by URL params
  }, [ id ]);

  return (
    <div className="container mt-3 pb-3">
      <nav className="breadcrumb offset-1 ps-2 mb-0" aria-label="breadcrumb">
        <ol className="breadcrumb">
          {
            product?.categories?.map((category, idx) => (
              <li key={ idx } className="breadcrumb-item active">{ category }</li>
            ))
          }
        </ol>
      </nav>

      <div className="container bg-white rounded-1 col-10 offset-1">
        <div className="row mx-0 col-12 mb-5">
          <div className="img-container col-8 mt-4">
            <img src={ product?.item?.picture } alt={ product?.item?.title } width="680px" height="680px"
                 className="col-12" />
          </div>
          <div className="product-detail col-4">
            <p className="mt-4 mb-2">
              <small className="text-muted">{ product?.item?.condition } - { product?.item?.sold_quantity } vendidos</small>
            </p>
            <h5>{ product?.item?.title }</h5>
            <h3 className="my-4">{ product && currencyFormat(product?.price?.amount) }</h3>
            <button className="btn btn-primary text-center col-12 me-4">Comprar</button>
          </div>
        </div>

        <div className="product-description mx-4 pb-4 col-12">
          <h3 className="mb-4">Descripción del producto</h3>
          <p className="col-8 text-muted">{ product?.item?.description }</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
