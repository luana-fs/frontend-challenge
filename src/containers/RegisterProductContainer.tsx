import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { ProductContext } from "../contexts/ProductContext";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";
import RegisterProduct from "../pages/RegisterProduct";
import { idGenerator } from "../services/idGenerator";
import {
  createProduct,
  findProductById,
  getAllProducts,
} from "../services/Product";

export function RegisterProductContainer() {
  const productContext = useContext(ProductContext);
  const authContext = useContext(AuthContext);

  const {
    states: { userInfo },
  } = authContext;
  const {
    handlers: { handleCreateProduct },
  } = productContext;

  const { value: productName, onChange: onChangeProductName } = useInput("");
  const [barCodeScanned, setBarCodeScan] = useState("");
  const [category, setCategory] = useState("");
  const [createdBy, setCreatedBy] = useState({});

  useEffect(() => {
    productContext.handlers.handleGetAllProducts();
    // handleDeleteProduct("2345");
    // productContext.handlers.handleCreateProduct({
    //   id: "2345",
    //   name: "CHOCOLATEEEEE",
    //   category: "Roupas",
    //   barCode: "900909",
    //   createdyBy: {
    //     id: "jojp290kj3i3jo",
    //     name: "lua",
    //     email: "lua@deliver",
    //     role: "User",
    //   },
    // });
  }, []);

  //FIX IT - Handle é quando o usuário clica. Essa deve se handle, nao a da linha 58
  const createProduct = () => {
    handleCreateProduct({
      id: idGenerator(),
      name: productName,
      category: category,
      barCode: barCodeScanned,
      createdBy: userInfo,
    });
  };

  const data = {
    contexts: { productContext, authContext },
    states: { productName, category, barCodeScanned },
    setters: {
      setCategory,
      setCreatedBy,
      onChangeProductName,
      setBarCodeScan,
    },
    handlers: { createProduct },
  };

  return <RegisterProduct data={data} />;
}
