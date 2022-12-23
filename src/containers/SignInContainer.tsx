import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { UsersContext, UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";

export function SignInContainer() {
  const { handlers: handleSignIn } = useContext(AuthContext);

  const data = {
    //FIX IT destruturar handlers na linha 17
    handlers: { handleSignIn },
  };

  return <SignInPage data={data} />;
}
