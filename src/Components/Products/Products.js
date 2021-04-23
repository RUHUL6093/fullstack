import React from "react";
import productData from "../../Components/fakeData/fakedata.json";
import Product from "../Product/Product";
const Products = () => {
  const addAllProducts = () => {
    fetch("https://jsxuo.sse.codesandbox.io/addProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="row">
      <button onClick={addAllProducts}>Add All</button>
      {productData.map((p) => (
        <Product product={p}></Product>
      ))}
    </div>
  );
};
export default Products;
