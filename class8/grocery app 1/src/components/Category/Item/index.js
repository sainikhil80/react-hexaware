import React from 'react';

const Item = (props) => {
    const { catName, catImage } = props.data
    return(
        <div className="col-sm-3">
        <div className="card">
        <img src={ 'http://rjtmobile.com/grocery/images/'+ catImage } class="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title">{ catName }</h5>
           
            <a href="#" className="btn btn-primary btn-block">
             Select
            </a>
          </div>
        </div>
      </div>
    )
}
export default Item;