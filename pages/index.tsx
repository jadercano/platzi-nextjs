import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import Layout from "@components/Layout/Layout";
import ProductList from "@components/ProductList/ProductList";
import axios from "axios";
import React from "react";

export const getServerSideProps = async () => {
  const {
    data: { data: productList },
  } = await axios.get<TAPIAvoResponse>("http://localhost:3000/api/avo");
  return {
    props: {
      productList,
    },
  };
};

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;
