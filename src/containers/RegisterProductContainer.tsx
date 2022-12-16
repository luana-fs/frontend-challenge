import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ProductContext } from "../contexts/ProductContext";
import { useInput } from "../hooks/useInput";
import RegisterProduct from "../pages/RegisterProduct";
import { idGenerator } from "../services/idGenerator";

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
