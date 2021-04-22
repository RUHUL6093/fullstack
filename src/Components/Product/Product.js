import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const product = props.product;
  const { name, img, price } = product;

  return (
    <div
      className="col-md-3 mb-3
    "
    >
      <Link to="/Login">
        <div className="m-3 shadow rounded p-3 h-100">
          <img className="img-fluid" src={img} alt="" />
          <h3> {name}</h3>
          <h5>Price:{price} Taka</h5>
        </div>
      </Link>
    </div>
  );
};
export default Product;
