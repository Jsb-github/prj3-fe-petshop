import React from "react";
import FiltersCategory from "./filters-category/FiltersCategory";
import CardList from "./Card-list/CardList";
import CountProducts from "./count-products/CountProducts";

function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <h1>PET Products</h1>
        <FiltersCategory />
        <CountProducts />
        <CardList />
      </div>
    </div>
  );
}

export default HomePage;
