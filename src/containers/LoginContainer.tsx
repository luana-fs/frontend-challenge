import React, { useState } from "react";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";

export function LoginContainer() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  console.log("9", email, password);

  // const props = {
  //   states: {
  //     isPasswordVisible,
  //     inputValue,
  //   },
  //   setters: {
  //     setIsPasswordVisible,
  //     setInputValue,
  //   },
  //   handlers: {
  //     handleOnChange,
  //   },
  // };

  return (
    <LoginPage content={{ email, onChangeEmail, password, onChangePassword }} />
  );
}
