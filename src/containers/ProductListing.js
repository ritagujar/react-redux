import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

function ProductListing() {
  // To fetch the products which are in redux store we use useSelector
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
