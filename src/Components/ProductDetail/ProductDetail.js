import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const ProductDetail = () => {
  const { Name } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    // const url = `https://t5ext.csb.app/product/{Name}`;
    fetch(`https://t5ext.csb.app/product/${Name}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  });

  return (
    <div>
      <h1>This is Detail :{Name}</h1>
      <h3> {detail.name}</h3>
      {/* <h4> Price:{detail.price}</h4> */}
      <Link to="/Orders">
        <button className="btn btn-success">Place order</button>
      </Link>
    </div>
  );
};
export default ProductDetail;
