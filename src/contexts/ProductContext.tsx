import React, { createContext, useContext, useEffect, useState } from "react";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
import { useInput } from "../hooks/useInput";
import {
  createProduct,
  deleteProduct,
  findProductById,
  getAllProducts,
} from "../services/Product";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }: any) => {
  const [productList, setProductList] = useState([]);
  // const [category, setCategory] = useState("");
  // const [createdBy, setCreatedBy] = useState({});

  useEffect(() => {
    handleGetAllProducts();
    // handleDeleteProduct("2345");
    handleCreateProduct({
      id: "234225",
      name: "bolsa",
      category: "Roupas",
      barCode: "900909",
      createdyBy: {
        id: "jojp290kj3i3jo",
        name: "lua",
        email: "lua@deliver",
        role: "User",
      },
    });
  }, []);

  const handleGetAllProducts = async () => {
    const [products] = await getAllProducts();
    console.log("37", products);
    const newProductList = [...productList, products];
    setProductList(newProductList);
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

    console.log("produto criado!", product);

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
