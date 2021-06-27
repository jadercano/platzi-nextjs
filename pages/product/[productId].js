import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();

  return (
    <div>
      <h1>Page details for product {productId}</h1>
    </div>
  );
};

export default ProductItem;
