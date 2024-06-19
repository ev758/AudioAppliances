import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Filter from './Filter.jsx';
import GetProducts from './../utils/GetProducts.jsx';

function ProductResults({productType}) {
  //declarations
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const params = useParams();
  let djangoApiConnection;

  if (productType !== null) {
    //if headphone, headset, earphone, microphone or speaker link was clicked,
    //then audio products of the product type will be fetched
    djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + productType;
  }
  else if (location.state !== null) {
    //if keyword input was entered, then audio products with the keyword will be fetched
    djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + location.state.keyword;
  }
  else {
    //keyword input was entered to web browser's search bar and audio products with the keyword will be fetched
    djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + params.keyword;
  }

  useEffect(() => {
    GetProducts(djangoApiConnection, setProducts);
  }, [location.state]);

  return (
    <>
      <Filter/>
      
      <div className="audio-product-format">
        {
          //displays audio product cards dynamically
          products.map((product) => 
            <div className="audio-product-card" key={product.product_id}>
              <Link to={product.product_name}>
                <div>
                  <img src={product.image_path + product.image_name} alt={product.product_name}/>
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