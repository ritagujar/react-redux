import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

function ProductListing() {
  // To fetch the products which are in redux store we use useSelector
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  // Function for fetching all the products from API
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
    // console.log(response);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
