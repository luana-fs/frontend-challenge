import React, { createContext, useContext, useEffect } from "react";
import { Snackbar } from "react-native-paper";
import { UsersListContext } from "./UsersContext";

export const AuthContext = createContext(false);

export const Auth = ({ children }: any) => {
  const usersContext = useContext(UsersListContext);
  console.log("função findUser vindo do userContext", usersContext.handlers);
  const { findUser } = usersContext.handlers;

  findUser({ email: "jesus@deliver.com", password: "pipoca" });

  useEffect(() => {
    handleLogin("jesus@deliver.com", findUser);
  }, []);

  const handleLogin = async (email: string, findUser: (arg: {}) => object) => {
    console.log("findUser sendo utilizada no auth context", findUser(email));

    const user = await findUser(email);

    console.log("user", findUser(email));

    if (!user) {
      <Snackbar visible>Usuário não encontrado</Snackbar>;
    }
    console.log("login realizado com sucesso");
  };

  return (
    <AuthContext.Provider value={{ handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
