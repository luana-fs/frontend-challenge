import React, { createContext, useEffect, useState, useContext } from "react";
import {
  createUser,
  getAllUsers,
  findUserById,
  findUser,
} from "../services/Users";

export const UsersListContext = createContext({});

export const UsersContext = ({ children }: any) => {
  const [usersList, setUsersList] = useState([]);
  const [solicitationsList, setSolicitationsList] = useState([]);
  const [user, setUser] = useState([]);

  console.log("user", user);
  console.log("lista", usersList);

  // useEffect(() => {
  //   handleGetAllUsers();
  //   // getAllUsers();
  //   // findUserById("52");
  //   // findUser("raul@deliver.com");
  //   // createUser({
  //   //   id: idGenerator(), //NUNCA COLOQUE IDS IGUAIS NA HR DE CRIAR! e ele só chama quem foi criado pelo mirage!
  //   //   name: "jesus",
  //   //   email: "jesus@deliver.com",
  //   //   role: "User",
  //   //   password: "azul",
  //   // });
  // }, []);

  const handleGetAllUsers = async () => {
    const usersList = await getAllUsers();
    setUsersList(usersList);
  };

  const handleCreateUser = (body: any) => {
    const user = createUser(body);
    console.log(user);
    setUser(user);
  };

  const handleFindUserById = (id: string) => {
    const user = findUserById(id);
    setUser(user);
  };

  const handleFindUser = async (params: {
    email: string;
    password: string;
  }) => {
    const user = await findUser(params);
    console.log("q", user);
    setUser(user);
  };

  const handleSolicitations = (user: {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
  }) => {
    const newSolicitationsList = [...solicitationsList, user];
    setSolicitationsList(newSolicitationsList);
  };

  const handleAcceptSolicitation = (user: {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
  }) => {
    const newUsersList = [...usersList, user];
    setUsersList(newUsersList);

    const newSolicitationsList = solicitationsList.filter(
      (item) => item.id !== user.id
    );

    setSolicitationsList(newSolicitationsList);
    console.log("Solicitação aceita com sucesso!");
  };

  const states = { usersList, user, setUsersList, setUser, solicitationsList };

  const handlers = {
    handleGetAllUsers,
    handleCreateUser,
    handleFindUserById,
    handleFindUser,
    handleSolicitations,
    handleAcceptSolicitation,
  };

  return (
    <UsersListContext.Provider value={{ states, handlers }}>
      {children}
    </UsersListContext.Provider>
  );
};
