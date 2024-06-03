import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import GetProducts from './../utils/GetProducts.jsx';
import ProductImage from './../utils/ProductImage.jsx';

function ProductResults({productType}) {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const params = useParams();
  let djangoApiConnection;

  if (productType !== null) {
    djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + productType;
  }
  else if (location.state !== null) {
    djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + location.state.keyword;
  }
  else {
    djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + params.keyword;
  }

  useEffect(() => {
    GetProducts(djangoApiConnection, setProducts);
  }, [location.state]);

  return (
    <>
      <div className="audio-product-format">
        {
          products.map((product) => 
            <div className="audio-product-card" key={product.product_id}>
              <Link to={product.product_name}>
                <div>
                  <img src={ProductImage(product.image_name, product.image_path)} alt={product.product_name}/>
                  <h5>{product.product_name}</h5>
                  <p>{product.brand}</p>
                </div>
              </Link>
            </div>
          )
        }
      </div>
    </>
  )
}

export default ProductResults;