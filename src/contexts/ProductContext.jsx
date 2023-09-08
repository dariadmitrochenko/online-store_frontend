import React, { createContext, useState, useEffect } from "react";

//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //product state
  const[products, setProducts] = useState([]);
  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/products');
      const data = await response.json();
      setProducts(data.data);
    };
    fetchProducts();
  }, [])
  console.log(products);
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductProvider;
