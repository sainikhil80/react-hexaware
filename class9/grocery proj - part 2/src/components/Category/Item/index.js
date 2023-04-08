import React from "react";
import { Link } from 'react-router-dom'

const Item = (props) => {
  const { catName, catImage, catId } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src={"http://rjtmobile.com/grocery/images/" + catImage}
          class="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{catName}</h5>

          <Link to={ `/products/${catId}` } className="btn btn-primary btn-block">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item;
