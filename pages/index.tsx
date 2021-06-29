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
    <>
      <h1>Hello platzi!</h1>
      {productList ? (
        productList.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default HomePage;
