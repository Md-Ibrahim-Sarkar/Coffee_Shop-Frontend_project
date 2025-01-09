/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { ProductContext } from '../context';

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);

  console.log(details);

  useEffect(() => {
    fetch('https://coffee-shop-backend-kohl.vercel.app/coffees')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleProductDetails = id => {
    const productDetails = products.find(product => product._id === id);
    setDetails(productDetails);
  };

  const value = {
    products,
    setProducts,
    details,
    setDetails,
    handleProductDetails,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
