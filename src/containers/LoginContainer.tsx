import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";

export function LoginContainer() {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const data = { email, onChangeEmail, password, onChangePassword };
  // console.log(data);

  const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const usersContext = useContext(UsersListContext);
  console.log("contexto", usersContext);

  return <LoginPage data={data} />;
}
