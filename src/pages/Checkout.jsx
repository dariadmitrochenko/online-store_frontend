import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PaymentCard from "../components/PaymentCard";
import ShippingCard from "../components/ShippingCard";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";


const Checkout = () => {
  // capture total owed to use in "Pay" button
  const { total } = useContext(CartContext);
  //create onclick event to submit order

  //send POST request to Laravel with cart data on place order click

  //open sidebar to review cart
  const { handleOpen } = useContext(SidebarContext);

  return (
    <div className="container mx-auto py-20 max-w-[800px]">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-between gap-[40px]">
        <ShippingCard />
        <PaymentCard />
      </div>
      <div className="container mx-auto py-6 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-between gap-[40px]">
            <button className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
              <div>
                <p className="text-base leading-4">
                  Pay ${parseFloat(total).toFixed(2)}
                </p>
              </div>
            </button>
            <button className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
              <div>
                <p className="text-base leading-4" onClick={handleOpen}>Review Your Cart</p>
              </div>
            </button>
          </div>
        </div>
    </div>
  );
};
export default Checkout;
