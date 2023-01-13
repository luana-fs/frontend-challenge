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
  console.log(userInfo);
  const data = {
    states: { loading, userInfo },
    handlers: { handleCreateProduct },
  };

  return <RegisterProduct data={data} />;
}
