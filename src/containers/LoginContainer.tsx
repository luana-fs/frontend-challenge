import React, { useEffect, useState } from "react";
import { api } from "../api";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";

export function LoginContainer() {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const data = { email, onChangeEmail, password, onChangePassword };
  // console.log(data);


  return <LoginPage data={data} />;
}
