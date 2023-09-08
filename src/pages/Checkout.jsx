import React from "react";
import { Link } from "react-router-dom";
import PaymentCard from "../components/PaymentCard";
import ShippingCard from "../components/ShippingCard";

const Checkout = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-[30px] justify-between">
        <ShippingCard />
        <PaymentCard />
      </div>
    </div>
  );
};
export default Checkout;
