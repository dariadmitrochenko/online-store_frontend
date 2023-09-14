import React, { useContext } from "react";
// import cart context
import { CartContext } from "../contexts/CartContext";
//import input
import Input from "./Input";
const PaymentCard = () => {
  return (
    <div className="bg-green-200">
      <div className="flex flex-row justify-center items-center mt-6">
        <hr className="border-orange-400 w-full" />
        <p className="flex flex-shrink-0 px-4 pb-5 text-base leading-4 text-gray-600">
          Pay with card
        </p>
        <hr className="border-orange-400 w-full" />
      </div>
      <Input
        label="Card details"
        type="number"
        placeholder="0000 1234 6549 15151"
      />
      <Input label="Expiration Date" type="number" placeholder="MM/YY" />
      <Input
        label="3-digit code on the back of your card"
        type="number"
        placeholder="CVC"
      />
      <Input label="Name on Card" type="text" placeholder="Name on card" />
      <Input
        label="Your billing zip code"
        type="number"
        placeholder="Zip Code"
      />
    </div>
  );
};

export default PaymentCard;
