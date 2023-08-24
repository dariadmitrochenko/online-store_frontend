/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
//import product context
import { ProductContext } from "../contexts/ProductContext";
//import components
import Product from "../components/Product";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";

const Home = () => {
  const { products } = useContext(ProductContext);

  // get only 8 items and paginate the rest
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="flex-1 text-center mb-10">
          <h1 className="text-[26px] font-medium mb-2 mx-auto">
            Today's selection
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] first-letter:max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {currentProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
          <div>
            <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
             />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
