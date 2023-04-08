import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mrp</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Product id="1" name="Laptop" mrp="10000" price="9000" />
          <Product id="2" name="Mobile" mrp="9000" price="8000" />
          <Product id="3" name="Desktop" mrp="8000" price="7000" />
          <Product id="4" name="Table" mrp="7000" price="6000" />
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;
