import React, { createContext, useContext, useEffect, useState } from "react";
import { set } from "react-native-reanimated";
import {
  createProduct,
  deleteProduct,
  findProductById,
  getAllProducts,
} from "../services/Product";
import { LoadingContext } from "./LoadingContext";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }: any) => {
  const [productList, setProductList] = useState([]);

  const { setLoading } = useContext(LoadingContext);

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
    setLoading(true);
    const product = await createProduct(productData);
    setLoading(false);
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
