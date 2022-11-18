import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";

export function SignInContainer() {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const { value: confirmPassword, onChange: onChangeConfirmPassword } =
    useInput("");
  const [role, setRole] = useState("");

  const { handlers } = useContext(AuthContext);

  const data = {
    states: { email, password, confirmPassword, role },
    setters: {
      onChangeEmail,
      onChangePassword,
      onChangeConfirmPassword,
      setRole,
    },
    handlers: { handleSignIn: handlers.handleSignIn },
  };

  return <SignInPage data={data} />;
}
