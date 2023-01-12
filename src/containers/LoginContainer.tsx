import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";
import { createProduct } from "../services/Product";
import { createUser, findUserByEmail } from "../services/Users";

export function LoginContainer() {
  const { handlers } = useContext(AuthContext);

  useEffect(() => {
    // createUser({
    //   id: "1",
    //   name: "Luana Farias",
    //   email: "luana@deliver.com",
    //   role: "SuperAdmin",
    //   password: "bananinha",
    // });
    // findUserByEmail("florr@email.com");
  }, []);

  const data = {
    handlers: { handleLogin: handlers.handleLogin },
  };

  return <LoginPage data={data} />;
}
