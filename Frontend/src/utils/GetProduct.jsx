async function GetProduct(djangoApiConnection, setProduct) {
    try {
        const response = await fetch(djangoApiConnection);

        if (!response.ok) {
          throw new Error("Could not get product data");
        }

        const productData = await response.json();
        setProduct(productData);
    }
    catch (error) {
        console.log(error);
    }
}

export default GetProduct;