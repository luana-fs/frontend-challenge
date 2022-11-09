import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";

export function LoginContainer() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (text: string) => setInputValue(text);

  console.log(inputValue);

  const props = {
    states: {
      isPasswordVisible,
      inputValue,
    },
    setters: {
      setIsPasswordVisible,
      setInputValue,
    },
    handlers: {
      handleOnChange,
    },
  };

  return <LoginPage props={props} />;
}
