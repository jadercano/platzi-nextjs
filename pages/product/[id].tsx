import Layout from "@components/Layout/Layout";
import ProductSummary from "@components/ProductSummary/ProductSummary";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => setProduct(data));
    }
  }, [query.id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;
