import { useRouter } from "next/router";
import React from "react";

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <h1>Page details for product {id}</h1>
    </div>
  );
};

export default ProductPage;
