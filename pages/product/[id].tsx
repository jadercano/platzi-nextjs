import Layout from "@components/Layout/Layout";
import ProductSummary from "@components/ProductSummary/ProductSummary";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { data: productList },
  } = await axios.get<TAPIAvoResponse>("http://localhost:3000/api/avo");
  const paths = productList.map(({ id }) => ({
    params: { id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: product } = await axios.get<TAPIAvoResponse>(
    `http://localhost:3000/api/avo/${params?.id}`
  );
  return {
    props: {
      product,
    },
  };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;
