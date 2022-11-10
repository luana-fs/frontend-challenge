import React, { createContext, useEffect, useState, useContext } from "react";
import { api } from "../api";

export const UsersListContext = createContext([]);

//fix it
export type UserContextType = {
  usersList: [];
  setUsersList: () => void;
};

export const UsersContext = ({ children }: any) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getAllUsers();
    console.log("users list context", usersList);
  }, []);

  const getAllUsers = async () => {
    try {
      const res = await api.get("users");
      return setUsersList(res.data);
    } catch (err) {
      return console.log("err", err);
    }
  };

  return (
    <UsersListContext.Provider value={{ usersList, setUsersList }}>
      {children}
    </UsersListContext.Provider>
  );
};
