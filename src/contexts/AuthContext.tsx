import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Snackbar } from "react-native-paper";
import { UsersListContext } from "./UsersContext";
import * as RootNavigation from "../routes/RootNavigation";

export const AuthContext = createContext({});

export const Auth = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(false);
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

    console.log(user);

    if (!user) {
      setIsAuth(false);
      RootNavigation.navigate("LoginPage");
      console.log("Usuário não encontrado");
    } else {
      setIsAuth(true);
      RootNavigation.navigate("SideMenu"); //quando tiver drawer, o login precisa redirecionar pra ele, e no proprio drawer colocamos a pagina inicial a qual queremos
      console.log("login realizado com sucesso");
    }

    return;
  };

  const handleLogout = () => {
    setIsAuth(false);
    RootNavigation.navigate("LoginPage");
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, isAuth, user }}>
      {/* <Button></Button>
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
      </Button> */}
      {children}
    </AuthContext.Provider>
  );
};
