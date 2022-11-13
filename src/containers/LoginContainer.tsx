import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";

export function LoginContainer() {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const data = { email, onChangeEmail, password, onChangePassword };

  const { handlers } = useContext(UsersListContext);
  const { findUser } = handlers;

  const { handleLogin } = useContext(AuthContext);

  return <LoginPage data={data} />;
}
