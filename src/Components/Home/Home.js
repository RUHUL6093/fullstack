import React from "react";
import Products from "../Products/Products";
const Home = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center m-5">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <Products />
    </div>
  );
};
export default Home;
