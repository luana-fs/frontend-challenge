import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Snackbar } from "react-native-paper";
import { UsersListContext } from "./UsersContext";
import * as RootNavigation from "../routes/RootNavigation";
import {
  createUser,
  findUserByEmail,
  findUserById,
  getAllUsers,
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

  const handleSignIn = async (userData: any) => {
    if (userData.password !== userData.confirmPassword) {
    } else {
      const [userAlreadyExists] = await findUserByEmail(userData.email);

      if (!userAlreadyExists) {
        const user = {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          confirmPassword: userData.confirmPassword,
          role: userData.role,
        };

        if (user.role === 2) {
          handleSolicitations(user);
          return;
        } else {
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

    const [user] = await findUserByEmail(credentials.email);
    setUserInfo(user);

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
