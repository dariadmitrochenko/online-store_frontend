import React from "react";

const ShippingCard = () => {
  return (
    <div>
    <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
      <div className="flex flex-col-1 justify-start items-start space-y-9">
        <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col">
          <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
            Address Line 1
          </label>
          <div className="mt-2 flex-col">
            <div>
              <input
                className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="address"
                name=""
                id=""
                placeholder="Address Line 1"
              />
            </div>
          </div>
          <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
            Address Line 2
          </label>
          <div className="mt-2 flex-col">
            <div>
              <input
                className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="address"
                name=""
                id=""
                placeholder="Address Line 2"
              />
            </div>
          </div>
          <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
            City
          </label>
          <div className="mt-2 flex-col">
            <div>
              <input
                className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="address"
                name=""
                id=""
                placeholder="City"
              />
            </div>
          </div>
          <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
            State
          </label>
          <div className="mt-2 flex-col">
            <div>
              <input
                className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="address"
                name=""
                id=""
                placeholder="State"
              />
            </div>
          </div>
          <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
            Zipcode
          </label>
          <div className="mt-2 flex-col">
            <div>
              <input
                className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="address"
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
