import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Snackbar } from "react-native-paper";
import { UsersListContext } from "./UsersContext";
import * as RootNavigation from "../routes/RootNavigation";
import { createUser, findUser } from "../services/Users";
import { idGenerator } from "../services/idGenerator";

export const ProductContext = createContext({});

export const productContext = ({ children }: any) => {
  

  // const {
  //   states: { user, solicitatiosList },
  //   handlers: { handleSolicitations, handleGetAllUsers, handleFindUser },
  // } = useContext(UsersListContext);

  // const handleCreateProduct = (
  //   productData: { name: string; email: string; role: string; password: string },
  //   find: (arg0: { email: string; password: string }) => {}
  // ) => {
  //   find({ email: userData.email, password: userData.password });

  //   if (!products.length) {
  //     const user = {
  //       id: idGenerator(),
  //       name: userData.name,
  //       email: userData.email,
  //       role: userData.role,
  //       password: userData.password,
  //     };

  //     if (user.role === "Admin") {
  //       handleSolicitations(user);
  //       return;
  //     } else {
  //       createUser(user);
  //       handleGetAllUsers();
  //       RootNavigation.navigate("LoginPage");
  //       // console.log("criou", user);
  //     }
  //   } else {
  //     console.log("O usuário já existe");
  //   }
  // };

  // const handleLogin = async (
  //   credentials: { email: string; password: string },
  //   find: (arg: string) => any
  // ) => {
  //   //FIX IT - ao invés de enviar a função como parâmetro, chamei ela direto por problemas do estado
  //   const [result] = await findUser(credentials);
  //   // console.log("53", result);

  //   if (!result.email) {
  //     setIsAuth(false);
  //     RootNavigation.navigate("LoginPage");
  //     console.log("Usuário não encontrado");
  //   } else {
  //     setIsAuth(true);
  //     RootNavigation.navigate("SideMenu"); //quando tiver drawer, o login precisa redirecionar pra ele, e no proprio drawer colocamos a pagina inicial a qual queremos
  //     console.log("login realizado com sucesso");
  //   }
  // };

  // const handleLogout = () => {
  //   setIsAuth(false);
  //   RootNavigation.navigate("LoginPage");
  // };

  // const states = { isAuth, setIsAuth };

  // const handlers = {
  //   handleSignIn,
  //   handleLogin,
  //   handleLogout,
  // };

  return (

    // FIX IT - colocar valores certos no value
    <ProductContext.Provider value={'valor'}>
      {children}
    </ProductContext.Provider>
  );
};
