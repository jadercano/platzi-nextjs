import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return <h1>Page details for product {product?.name}</h1>;
};

export default ProductPage;
