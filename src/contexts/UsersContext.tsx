import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import { api } from "../api";

type CreateUserBodyProps = {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
};

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
    // getAllUsers();
    // findUserById("52");
    createUser({
      id: "52",
      name: "jesus",
      email: "jesus@deliver.com",
      role: "User",
      password: "pipoca",
    });
  }, []);

  //endpoint pegar usuários
  const getAllUsers = async () => {
    try {
      const res = await axios.get("/users");
      setUsersList(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //endpoint criar usuário

  const createUser = async (body: CreateUserBodyProps) => {
    try {
      const res = await axios.post("/users", body);
      // console.log("Axios criou", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const findUserById = async (id: string) => {
    try {
      const res = await axios.get(`/users/${id}`);
      // console.log(res.data);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const findUser = async (password: string) => {
    try {
      const res = await axios.post("/users/getBy", null, {
        params: {
          email: password,
        },
      });
      // console.log("findiBy", res.config.name);
      console.log("AXIOS", res.request.response);
      return res.data.users;
    } catch (err) {
      console.log(err);
    }
  };

  const handlers = {
    getAllUsers,
    createUser,
    findUserById,
    findUser,
  };

  return (
    <UsersListContext.Provider value={{ usersList, setUsersList, handlers }}>
      {children}
    </UsersListContext.Provider>
  );
};
