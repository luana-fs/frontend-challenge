import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";

export function LoginContainer() {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const data = { email, onChangeEmail, password, onChangePassword };
  // console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get("users", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return console.log(res.data);
    } catch (err) {
      return console.log("err", err);
    }
  }

  return <LoginPage data={data} />;
}
