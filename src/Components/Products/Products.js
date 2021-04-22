import React from "react";
import productData from "../../Components/fakeData/fakedata.json";
import Product from "../Product/Product";
const Products = () => {
  return (
    <div className="row">
      {productData.map((p) => (
        <Product product={p}></Product>
      ))}
    </div>
  );
};
export default Products;
