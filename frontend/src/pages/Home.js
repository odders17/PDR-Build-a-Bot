import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React from "react";
import ProductCards from "../components/ProductsCards";

function Home() {
  return (
    <>
      <ProductCards
        image="https://cdn.pixabay.com/photo/2021/11/15/05/52/red-fox-6796430_960_720.jpg"
        title="fox"
        text="Here's the fox"
      />
    </>
  );
}

export default Home;
