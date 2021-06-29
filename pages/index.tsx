import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import Layout from "@components/Layout/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>();

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }) => setProductList(data));
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      {/* <ProductList products={productList} /> */}
    </Layout>
  );
};

export default HomePage;
