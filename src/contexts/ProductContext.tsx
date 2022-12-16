import React, { createContext, useEffect, useState } from "react";
import {
  createProduct,
  deleteProduct,
  findProductById,
  getAllProducts,
} from "../services/Product";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }: any) => {
  const [productList, setProductList] = useState([]);

  const handleGetAllProducts = async () => {
    const [products] = await getAllProducts();
    //se products vier undefined, não salva o undefined dentro do array de produtos
    products && setProductList(newProductList);
  };

  const handleCreateProduct = async (productData: {
    id: string;
    name: string;
    category: string;
    barCode: string;
    createdBy: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }) => {
    const product = await createProduct(productData);

    const newProductList = [...productList, product];
    setProductList(newProductList);
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
  };

  const data = {
    states: { productList },
    setters: { setProductList },
    handlers: {
      handleCreateProduct,
      handleGetAllProducts,
      handleDeleteProduct,
    },
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};
