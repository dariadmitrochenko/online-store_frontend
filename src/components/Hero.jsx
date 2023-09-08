import React from "react";
//import images
import Cannabis from "../img/cannabis.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Hero = () => {
  return (
    <section className=" bg-green-200 h-[500px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center lg:ml-8">
          <div>
            <div className="text-[65px] leading-[1.1] font-light my-6">Don't wait for your Adderall prescription refill</div>
            <h1 className="text-[30px] mt-20">Discover the best strain for ADHD</h1>
            <Link className="hover:underline" to='{product/13}'>LEARN MORE</Link>
          </div>
        </div>
        {/* img */}
        <div className="hidden lg:block">
          <img className="w-[650px] h-[350px]" src={Cannabis} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
