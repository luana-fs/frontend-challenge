import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";
import { createUser } from "../services/Users";

export function LoginContainer() {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  const { handlers } = useContext(AuthContext);

  useEffect(() => {
    createUser({
      id: "1",
      name: "Luana Farias",
      email: "luana@deliver.com",
      role: "SuperAdmin",
      password: "bananinha",
    });
  }, []);

  const data = {
    states: { email, password },
    setters: { onChangeEmail, onChangePassword },
    handlers: { handleLogin: handlers.handleLogin },
  };

  return <LoginPage data={data} />;
}
