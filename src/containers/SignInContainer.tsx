import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";

export function SignInContainer() {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const { value: confirmPassword, onChange: onChangeConfirmPassword } =
    useInput("");

  const { handleLogin, isAuth } = useContext(AuthContext);
  const {
    handlers: { findUser, createUser },
  } = useContext(UsersListContext);

  const data = {
    email,
    onChangeEmail,
    password,
    confirmPassword,
    createUser,
    onChangePassword,
    onChangeConfirmPassword,
    handleLogin,
    isAuth,
    findUser,
  };

  return <LoginPage data={data} />;
}
