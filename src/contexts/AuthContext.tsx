import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Snackbar } from "react-native-paper";
import { UsersListContext } from "./UsersContext";
import * as RootNavigation from "../routes/RootNavigation";
import {
  createUser,
  findUserByEmail,
  findUserById,
  login,
} from "../services/Users";
import { idGenerator } from "../services/idGenerator";
import { LoadingContext } from "./LoadingContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncStorage } from "../services/storeData";

export const AuthContext = createContext({});

export const Auth = ({ children }: any) => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const { loading, setLoading } = useContext(LoadingContext);

  const {
    states: { user, solicitatiosList },
    handlers: { handleSolicitations, handleGetAllUsers, handleFindUser },
  } = useContext(UsersListContext);

  const handleSignIn = (userData: any) => {
    console.log("37");

    if (userData.password !== userData.confirmPassword) {
      console.log("As senhas não correspondem");
    } else {
      const userAlreadyExists = findUserByEmail(userData.email);
      console.log("41");

      if (!userAlreadyExists) {
        const user = {
          name: userData.name,
          email: userData.email,
          role: userData.role,
          password: userData.password,
        };

        if (user.role === 2) {
          handleSolicitations(user);
          return;
        } else {
          console.log("54");
          createUser(user);
          handleGetAllUsers();
          RootNavigation.navigate("LoginPage");
        }
      } else {
        console.log("O usuário já existe");
      }
    }
  };

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    // setLoading(true);

    const { token } = await login(credentials.email, credentials.password);

    if (token) {
      setToken(token);
      // setLoading(false);
      RootNavigation.navigate("SideMenu"); //quando tiver drawer, o login precisa redirecionar pra ele, e no proprio drawer colocamos a pagina inicial a qual queremos
      await asyncStorage.storeData(token);
    }
    // setLoading(false);
  };

  const handleLogout = async () => {
    await asyncStorage.removeData();
    setToken("");
    RootNavigation.navigate("LoginPage");
  };

  //FIX IT// colocar tudo em um objeto DATA
  const states = { token, setToken, userInfo };

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
