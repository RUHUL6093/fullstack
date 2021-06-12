import React, { useEffect, useState } from "react";
// import productData from "../../Components/fakeData/fakedata.json";
import Product from "../Product/Product";
const Products = () => {
  const [productData, setproductData] = useState([]);
  useEffect(() => {
    fetch("https://rb5is.sse.codesandbox.io/products")
      .then((res) => res.json())
      .then((data) => setproductData(data));
  });
  // const handleAddProduct = () => {
  //   console.log(handleAddProduct);
  // };
  return (
    <div className="row">
      {/* <button onClick={addAllProducts}>Add All</button> */}
      {productData.map((p) => (
        <Product product={p}></Product>
      ))}
    </div>
  );
};
export default Products;
