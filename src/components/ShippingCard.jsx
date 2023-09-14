import React from "react";
import Input from "./Input";

const ShippingCard = () => {
  return (
      <div className="bg-green-200 pb-4">
      <div className="flex flex-row justify-center items-center mt-6">
        <hr className="border-orange-400 w-full" />
        <p className="flex flex-shrink-0 px-4 pb-5 text-base leading-4 text-gray-600">
          Shipping information
        </p>
        <hr className="border-orange-400 w-full" />
      </div>
          <Input placeholder="First name" type="text" label="Your first name"/>
          <Input placeholder="Last name" type="text" label="Your last name"/>
          <Input placeholder="email" type="text" label="Your email"/>
          <Input placeholder="Address Line 1" type="text" label="Your street address"/>
          <Input placeholder="Address Line 2" type="text" label="Your apartment number"/>
          <Input placeholder="City" type="text" label="City"/>
          <Input placeholder="Zip Code" type="text" label="Your shipping zip code"/>
      </div>
  );
};

export default ShippingCard;
