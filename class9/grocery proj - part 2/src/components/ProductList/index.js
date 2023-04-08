import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useParams } from 'react-router-dom';

const ProductList = () => {
  let {catId} = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://apolis-grocery.herokuapp.com/api/products/cat/${catId}`)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-center">
      <h2>All Products</h2>
      <div className="row">
        {
            products.map(product => <Product data={ product } />)
        }
      </div>
    </div>
  );
};
export default ProductList;
