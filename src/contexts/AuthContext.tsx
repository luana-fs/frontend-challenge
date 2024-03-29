import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Snackbar } from "react-native-paper";
import { UsersListContext } from "./UsersContext";
import * as RootNavigation from "../routes/RootNavigation";
import { createUser, findUser } from "../services/Users";
import { idGenerator } from "../services/idGenerator";
import { LoadingContext } from "./LoadingContext";

export const AuthContext = createContext({});

export const Auth = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const { loading, setLoading } = useContext(LoadingContext);

  console.log("logado:", isAuth);

  const {
    states: { user, solicitatiosList },
    handlers: { handleSolicitations, handleGetAllUsers, handleFindUser },
  } = useContext(UsersListContext);

  const handleSignIn = (
    userData: {
      name: string;
      email: string;
      role: string;
      password: string;
      confirmPassword: string;
    },
    find: (arg0: { email: string; password: string }) => {}
  ) => {
    //verifica se os passwords são iguais
    if (userData.password !== userData.confirmPassword) {
      console.log("Sas senhas não correspondem");
    } else {
      //se as senhas forem iguais, procura se o usuário já existe
      find({ email: userData.email, password: userData.password });
      //se não tiver um usuário existente ele cria um novo
      if (!user.length) {
        const user = {
          id: idGenerator(),
          name: userData.name,
          email: userData.email,
          role: userData.role,
          password: userData.password,
        };

        //se o role escolhido for admin, tem que pedir confirmação
        if (user.role === "Admin") {
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

  const handleLogin = async (
    credentials: { email: string; password: string },
    find: (arg: string) => any
  ) => {
    setLoading(true);
    //FIX IT - ao invés de enviar a função como parâmetro, chamei ela direto por problemas do estado
    const [user] = await findUser(credentials);
    setUserInfo({
      ...userInfo,
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    if (!user.email) {
      setIsAuth(false);
      RootNavigation.navigate("LoginPage");
      console.log("Usuário não encontrado");
      setLoading(false);
    } else {
      setIsAuth(true);
      RootNavigation.navigate("SideMenu"); //quando tiver drawer, o login precisa redirecionar pra ele, e no proprio drawer colocamos a pagina inicial a qual queremos
      console.log("login realizado com sucesso");
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuth(false);
    RootNavigation.navigate("LoginPage");
  };

  //FIX IT// colocar tudo em um objeto DATA
  const states = { isAuth, setIsAuth, userInfo };

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
