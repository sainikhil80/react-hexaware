import React from "react";

const Product = (props) => {
    const { productName, image, price, mrp, unit } = props.data;
  return (
    <div className="col-sm-4">
      <div className="card">
      <img src={ 'http://rjtmobile.com/grocery/images/'+ image } class="card-img-top"  />
        <div className="card-body">
          <h5 className="card-title">{ productName }</h5>
          <h2>Rs.{ price } <span><del>{ mrp }</del></span></h2>
          <a href="#" className="btn btn-primary btn-block">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default Product;
