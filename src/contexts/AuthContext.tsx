import React, { createContext, useContext, useEffect } from "react";
import { Button, Snackbar } from "react-native-paper";
import { UsersListContext } from "./UsersContext";

export const AuthContext = createContext(false);

export const Auth = ({ children }: any) => {
  const usersContext = useContext(UsersListContext);

  const { findUser } = usersContext.handlers;
  const { user } = usersContext;

  // useEffect(() => {
  //   handleLogin("raul@deliv222er.com", findUser); //essa vai no on
  //   // console.log("16", handleLogin("raul@deliver.com", findUser)); //quando eu chamo a função aqui, a requisição acontece.
  // }, []);

  const handleLogin = (
    credentials: { email: string; password: string },
    find: (arg: string) => any
  ) => {
    find(credentials);

    if (!user) {
      console.log("Usuário não encontrado");
    } else {
      console.log("login realizado com sucesso");
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin }}>
      <Button></Button>
      <Button></Button>
      <Button
        onPress={() =>
          handleLogin(
            { email: "miriam@deliver.com", password: "azul" },
            findUser
          )
        }
      >
        Logar
      </Button>
      {children}
    </AuthContext.Provider>
  );
};
