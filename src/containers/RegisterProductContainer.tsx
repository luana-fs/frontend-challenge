import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";
import RegisterProduct from "../pages/RegisterProduct";
import {
  createProduct,
  findProductById,
  getAllProducts,
} from "../services/Product";

export function RegisterProductContainer() {
  const { value: productName, onChange: onChangeProductName } = useInput("");
  const [category, setCategory] = useState("");
  const { value: barCode, onChange: onChangeBarCode } = useInput("");

  useEffect(() => {
    // getAllProducts();
    // createProduct({
    //   id: "2345",
    //   name: "Calças Jeans",
    //   category: "Roupas",
    //   barCode: "900909",
    //   createdyBy: {
    //     id: "jojp290kj3i3jo",
    //     name: "lua",
    //     email: "lua@deliver",
    //     role: "User",
    //   },
    // });
    // findProductById("2345");
  }, []);

  // const { handlers } = useContext(ProductContext);

  // const data = {
  //   states: { category, setCategory },
  //   setters: { onChangeProductName, onChangeBarCode },
  //   handlers: { handleLogin: handlers.createProduct },
  // };

  //FIX IT - dados a serem enviados para componente
  return <RegisterProduct data={{ category, setCategory }} />;
}
