import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ScrollRestoration, useParams } from 'react-router-dom';
import GetProduct from './../utils/GetProduct.jsx';

function ProductPage() {
  //declarations
  const [product, setProduct] = useState([]);
  const params = useParams();
  const djangoApiConnection = import.meta.env.VITE_DJANGO_API_CONNECTION + "product/" + params.productName;

  useEffect(() => {
    GetProduct(djangoApiConnection, setProduct);
  }, []);

  return (
    <>
      <ScrollRestoration/>
      {/* displays product */}
      <div className="audio-product" key={product.product_id}>
        <img className="audio-product-image" src={product.image_path + product.image_name} alt={product.product_name}/>
        <div>
          <h3>{product.product_name}</h3>
          <p>{product.brand}</p>
          <p className="audio-product-description">{product.product_description}</p>
        </div>
        <a href={product.product_link}><Button variant="dark">View Product</Button></a>
      </div>
    </>
  )
}

export default ProductPage;