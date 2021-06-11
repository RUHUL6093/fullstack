import React from "react";
import productData from "../../Components/fakeData/fakedata.json";
import Product from "../Product/Product";
const Products = () => {
  const handleAddProduct = () => {
    console.log(handleAddProduct);
  };
  return (
    <div className="row">
      {/* <button onClick={addAllProducts}>Add All</button> */}
      {productData.map((p) => (
        <Product product={p} handleAddProduct={handleAddProduct}></Product>
      ))}
    </div>
  );
};
export default Products;
