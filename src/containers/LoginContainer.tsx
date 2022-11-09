import React, { useState } from "react";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";

export function LoginContainer() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { value, onChange } = useInput("");

  console.log(value);

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

  return <LoginPage props={{ value, onChange }} />;
}
