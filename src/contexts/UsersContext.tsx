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
  const [user, setUser] = useState([]);

  console.log(usersList, user);

  // useEffect(() => {
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

  const handleGetAllUsers = () => {
    const usersList = getAllUsers();
    console.log("getAllUsers success", usersList);
    setUsersList(usersList);
  };

  const handleCreateUser = (body: any) => {
    const user = createUser(body);
    setUser(user);
  };

  const handleFindUserById = (id: string) => {
    const user = findUserById(id);
    setUser(user);
  };

  const handleFindUser = (params: { email: string; password: string }) => {
    const user = findUser(params);
    setUser(user);
  };

  const states = { usersList, user, setUsersList, setUser };

  const handlers = {
    handleGetAllUsers,
    handleCreateUser,
    handleFindUserById,
    handleFindUser,
  };

  return (
    <UsersListContext.Provider value={{ states, handlers }}>
      {children}
    </UsersListContext.Provider>
  );
};
