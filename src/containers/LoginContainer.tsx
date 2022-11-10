import React, { useEffect, useState } from "react";
import { api } from "../api";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";

export function LoginContainer() {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const data = { email, onChangeEmail, password, onChangePassword };
  // console.log(data);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const res = await api.get("users");
      return res.data;
    } catch (err) {
      return console.log("err", err);
    }
  };

  return <LoginPage data={data} />;
}
