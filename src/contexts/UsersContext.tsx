import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import { api } from "../api";
import { idGenerator } from "../services/idGenerator";

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
  const [user, setUser] = useState([]);

  useEffect(() => {
    // getAllUsers();
    // findUserById("52");
    // findUser("luana@deliver.com");
    // createUser({
    //   id: idGenerator(), //NUNCA COLOQUE IDS IGUAIS NA HR DE CRIAR! e ele só chama quem foi criado pelo mirage!
    //   name: "raul",
    //   email: "raul@deliver.com",
    //   role: "User",
    //   password: "pipoca",
    // });
  }, []);

  const getAllUsers = async () => {
    try {
      const res = await axios.get("/users");
      setUsersList(res.data);
      console.log("getAllUsers success", res.data);
      return res.data;
    } catch (error) {
      console.log("getAllUsers error", error);
    }
  };

  const createUser = async (body: CreateUserBodyProps) => {
    try {
      const res = await axios.post("/users", body);
      // console.log("CreateUser success", res.data);
    } catch (error) {
      console.log("createUser error", error);
    }
  };

  const findUserById = async (id: string) => {
    try {
      const res = await axios.get(`/users/${id}`);
      // console.log('findUser success', res.data);
      return res;
    } catch (error) {
      console.log("findUserById error", error);
    }
  };

  console.log("estado no userContext", user);
  const findUser = async (email: string) => {
    try {
      let res = await axios.post("/users/getBy", null, {
        params: {
          email,
        },
      });
      // console.log("UsersContext request", res.request.response);
      console.log("UsersContext request", res.data[0]);
      setUser(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.log("findUser error", error);
    }
  };

  const handlers = {
    getAllUsers,
    createUser,
    findUserById,
    findUser,
  };

  return (
    <UsersListContext.Provider
      value={{ usersList, user, setUsersList, handlers }}
    >
      {children}
    </UsersListContext.Provider>
  );
};
