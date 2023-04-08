import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/category")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">All Categories</h2>
      <div className="row">
        {
            categories.map(item => <Item data={item} />)
        }
      </div>
    </div>
  );
};
export default Category;
