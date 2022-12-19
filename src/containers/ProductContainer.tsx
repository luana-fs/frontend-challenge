import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ProductContext } from "../contexts/ProductContext";
import Products from "../pages/Products";

export function ProductContainer() {
  const productContext = useContext(ProductContext);
  const authContext = useContext(AuthContext);

  const [searchQuery, setSearchQuery] = useState("");

  const {
    states: { userInfo },
  } = authContext;

  const {
    states: { productList },
  } = useContext(ProductContext);

  const data = {
    states: { searchQuery, productList },
    setters: {
      setSearchQuery,
    },
  };

  return <Products data={data} />;
}
