import axios from "axios";
import React, { useContext, useEffect } from "react";
import { api } from "../api";
import { UsersContext } from "../contexts/UsersContext";

export const getAllUsers = async () => {
  try {
    const res = await api.get("/users");
    console.log("getAllUsers success", res.data);
    return res.data;
  } catch (error) {
    console.log("getAllUsers error", error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const body = { email, password };
    const res = await api.post("/users/login", body);
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    console.log("Erro 22", error.response.data);
  }
};

export const createUser = async (body: {
  name: string;
  email: string;
  role: number;
  password: string;
}) => {
  try {
    //FIX IT - cade o return dessa função?
    const res = await api.post("/users", body);
    console.log("CreateUser success", res.data);
    return res.data;
  } catch (error) {
    console.log("createUser error", error);
  }
};

export const findUserById = async (id: string) => {
  try {
    // console.log('findUser success', res.data);
    const res = await api.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.log("findUserById error", error.response);
  }
};

export const findUserByEmail = async (email: string) => {
  try {
    const res = await api.get("/users", {
      params: {
        email,
      },
    });

    console.log("UsersContext request", res.data);
    return res.data;
  } catch (error: any) {
    console.log("findUser error", error);
  }
};

export const editUser = async (
  id: string,
  body: {
    email: string;
    id: string;
    name: string;
    password: string;
    role: string;
  }
) => {
  const res = await api.put(`/users/${id}`, body);
  // console.log("usuario editado", res.data);
  return res.data;
};

export const deleteUser = async (id: string) => {
  try {
    const res = await api.delete(`http://192.168.3.48/users/${id}`);
    console.log("Delete user success", res);
    return res;
  } catch (error) {
    console.log("DeleteById error", error);
  }
};
