import React from "react";
import FiltersCategory from "./filters-category/FiltersCategory";
import CardList from "./Card-list/CardList";
import CountProducts from "./count-products/CountProducts";

function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <FiltersCategory />
        <CountProducts />
        <CardList />
      </div>
    </div>
  );
}

export default HomePage;
