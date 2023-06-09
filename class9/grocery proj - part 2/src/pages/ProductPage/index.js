import React from "react";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import SubCategory from "../../components/SubCategory";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
     <div className="container">
     <div className="row">
        <div className="col-lg-3">
          <SubCategory />
        </div>
        <div className="col-lg-9">
          <ProductList />
        </div>
      </div>
     </div>
    </div>
  );
};
export default ProductPage;
