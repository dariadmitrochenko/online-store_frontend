// eslint-disable-next-line no-unused-vars
import React from "react";
//import useContext
import { useContext } from "react";
//import useParams
import { useParams } from "react-router-dom";
//import product context
import { ProductContext } from "../contexts/ProductContext";
//import cart context
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  //get product id from url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get single product
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // product not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  //destructure product
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* image */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 mx-auto">
              {title}
            </h1>
            <div className="text-xl text-orange-600 font-medium mb-6">
              ${price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;