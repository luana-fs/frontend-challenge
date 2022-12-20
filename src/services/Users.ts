import axios from "axios";
import React, { useContext, useEffect } from "react";
import { UsersContext } from "../contexts/UsersContext";

export const getAllUsers = async () => {
  try {
    const res = await axios.get("/users");
    // console.log("getAllUsers success", res.data.data);
    return res.data.users;
  } catch (error) {
    console.log("getAllUsers error", error);
  }
};

export const createUser = async (body: {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
}) => {
  try {
    //FIX IT - cade o return dessa função?
    const res = await axios.post("/users", body);
    console.log("CreateUser success", res.data);
  } catch (error) {
    console.log("createUser error", error);
  }
};

export const findUserById = async (id: string) => {
  try {
    // console.log('findUser success', res.data);
    const res = await axios.get(`/users/${id}`);
    return res;
  } catch (error) {
    console.log("findUserById error", error);
  }
};

export const findUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    let res = await axios.post("/users/getBy", null, {
      params: {
        email: credentials.email,
        password: credentials.password,
      },
    });
    // console.log("UsersContext request", res.request.response);
    console.log("UsersContext request", res.data);
    return res.data;
  } catch (error) {
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
  const res = await axios.put(`/users/${id}`, body);
  // console.log("usuario editado", res.data);
  return res.data;
};

export const deleteUser = async (id: string) => {
  try {
    const res = await axios.delete(`/users/${id}`);
    console.log("Delete user success", res);
    return res;
  } catch (error) {
    console.log("DeleteById error", error);
  }
};
