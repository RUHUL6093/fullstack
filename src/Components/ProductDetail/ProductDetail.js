import React from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { Name } = useParams();
  return (
    <div>
      <h1>This is Detail of product :{Name}</h1>
    </div>
  );
};
export default ProductDetail;
