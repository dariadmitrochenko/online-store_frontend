import React from "react";

const ShippingCard = () => {
  return (
    <div>
      <div className="py-16 px-0 md:px-6 2xl:px-0 justify-center items-center 2xl:mx-auto 2xl:container">
        <div>
          <div className="flex flex-col p-8 bg-gray-100 dark:bg-gray-800 xl:w-3/5">
            <div className="mt-0.3">
              <div>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="address"
                  name=""
                  id=""
                  placeholder="Address Line 1"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600"
                  type="address"
                  name=""
                  id=""
                  placeholder="Address Line 2"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600"
                  type="address"
                  name=""
                  id=""
                  placeholder="City"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600"
                  type="address"
                  name=""
                  id=""
                  placeholder="State (NY only)"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600"
                  type="number"
                  name=""
                  id=""
                  placeholder="Zipcode"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingCard;
