import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LoadingContext } from "../contexts/LoadingContext";
import { ProductContext } from "../contexts/ProductContext";
import { useInput } from "../hooks/useInput";
import RegisterProduct from "../pages/RegisterProduct";
import { idGenerator } from "../services/idGenerator";

export function RegisterProductContainer() {
  const {
    handlers: { handleCreateProduct },
  } = useContext(ProductContext);
  const {
    states: { userInfo },
  } = useContext(AuthContext);
  const { loading } = useContext(LoadingContext);

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
    states: { productName, category, barCodeScanned, loading },
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
