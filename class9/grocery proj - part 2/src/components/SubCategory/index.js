import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams } from 'react-router-dom';

const SubCategory = () => {
  let {catId} = useParams()
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    axios.get(`http://apolis-grocery.herokuapp.com/api/subcategory/${catId}`)
    .then(response => {
      setSubCategories(response.data.data)
    })
    .catch(error => console.log(error))
  });
  return (
    <div>
      <h2>SubCategory</h2>
      <ul class="list-group">
        {subCategories.map((item) => (
          <li class="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;
