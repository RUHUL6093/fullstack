import React from "react";

const Product = (props) => {
  const product = props.product;
  const { name, img, price } = product;

  return (
    <div className="col-md-3">
      <div className="m-2">
        <img className="img-fluid" src={img} alt="" />
        <h3> {name}</h3>
        <h5>{price} </h5>
      </div>
    </div>
  );
};
export default Product;
