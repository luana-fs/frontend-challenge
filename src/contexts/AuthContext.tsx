import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Snackbar } from "react-native-paper";
import { UsersListContext } from "./UsersContext";
import * as RootNavigation from "../routes/RootNavigation";
import { createUser } from "../services/Users";
import { idGenerator } from "../services/idGenerator";

export const AuthContext = createContext({});

export const Auth = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(false);

  const {
    states: { user },
  } = useContext(UsersListContext);

  const handleSignIn = (
    userData: { name: string; email: string; role: string; password: string },
    find: (arg0: { email: string; password: string }) => {}
  ) => {
    find({ email: userData.email, password: userData.password });
    console.log("O USER AQUI", user);

    if (!user.lenght) {
      const user = {
        id: idGenerator(),
        name: userData.name,
        email: userData.email,
        role: userData.role,
        password: userData.password,
      };
      createUser(user);
      setIsAuth(true);
      RootNavigation.navigate("SideMenu");
      console.log("criou", user);
    } else {
      console.log("O usuário já existe");
    }
  };

  const handleLogin = async (
    credentials: { email: string; password: string },
    find: (arg: string) => any
  ) => {
    const user = await find(credentials);

    if (!user) {
      setIsAuth(false);
      RootNavigation.navigate("LoginPage");
      console.log("Usuário não encontrado");
    } else {
      setIsAuth(true);
      RootNavigation.navigate("SideMenu"); //quando tiver drawer, o login precisa redirecionar pra ele, e no proprio drawer colocamos a pagina inicial a qual queremos
      console.log("login realizado com sucesso");
    }
  };

  const handleLogout = () => {
    setIsAuth(false);
    RootNavigation.navigate("LoginPage");
  };

  const states = { isAuth, setIsAuth };

  const handlers = {
    handleSignIn,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={{ states, handlers }}>
      {children}
    </AuthContext.Provider>
  );
};
