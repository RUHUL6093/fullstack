import React from "react";
import productData from "../../Components/fakeData/fakedata.json";
const Admin = () => {
  const handleAddProduct = () => {
    fetch("https://rb5is.sse.codesandbox.io/addProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    });
  };
  return (
    <div>
      <button onClick={handleAddProduct}> Add Product </button>
    </div>
  );
};
export default Admin;
