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

  console.log("listadeprodu", productList);

  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  const handleGetAllProducts = async () => {
    const products = await getAllProducts();
    console.log("LISTA", productList);
    //se products vier undefined, não salva o undefined dentro do array de produtos
    products && setProductList(products);
  };

  const handleCreateProduct = async (productData: {
    name: string;
    category: number;
    barCode: string;
    createdBy: number;
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
