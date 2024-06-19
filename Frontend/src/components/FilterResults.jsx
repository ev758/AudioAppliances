import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Filter from './Filter.jsx';
import GetProducts from './../utils/GetProducts.jsx';

function FilterResults() {
  //declarations
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const params = useParams();
  let djangoApiConnection;

  if (location.state !== null) {
    //if filter inputs were entered, then selected audio products will be fetched
    djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + "filter/" + location.state.filters;
  }
  else {
    //filter inputs were entered to web browser's search bar and selected audio products will be fetched
    djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + "filter/" + params.filter;
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

export default FilterResults;