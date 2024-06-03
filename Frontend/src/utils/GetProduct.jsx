async function GetProduct(djangoApiConnection, setProducts) {
    try {
        const response = await fetch(djangoApiConnection);

        if (!response.ok) {
          throw new Error("Could not get product data");
        }

        const productData = await response.json();
        setProducts(productData);
    }
    catch (error) {
        console.log(error);
    }
}

export default GetProduct;