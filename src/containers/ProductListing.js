import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";

function ProductListing() {
  // To fetch the products which are in redux store we use useSelector
  const products = useSelector((state) => state);

  // Function for fetching all the products from API
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
    console.log(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products.data);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
