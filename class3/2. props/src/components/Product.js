import React from 'react';

const Product = (props) => {
    const {id, name, mrp, price} = props;
    return(
        <tr>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ mrp }</td>
        <td>{ price }</td>
    </tr>
    )
}
export default Product;