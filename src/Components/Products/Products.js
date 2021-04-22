import React from "react";
import productData from "../../Components/fakeData/fakedata.json";
const Products = () => {
  return (
    <div className="row">
      {productData.map((p) => (
        <h4> {p.name}</h4>
      ))}
    </div>
  );
};
export default Products;
