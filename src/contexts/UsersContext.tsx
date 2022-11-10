import axios from "axios";
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
  console.log(usersList);

  useEffect(() => {
    getAllUsers();

    console.log("users list context", usersList);
  }, []);

  const getAllUsers = async () => {
    try {
      const res = await axios.get("/users");
      setUsersList(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const addName = async (name: string) => {
    try {
      const res = await axios.post("/users", {
        id: new Date(),
        name: name,
        email: "maria@deliver.com",
        role: "User",
        password: "pipoca",
      });
      // console.log("Axios criou", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersListContext.Provider value={{ usersList, setUsersList }}>
      {children}
    </UsersListContext.Provider>
  );
};
