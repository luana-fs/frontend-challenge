import axios from "axios";
import React, { useContext, useEffect } from "react";
import { UsersContext } from "../contexts/UsersContext";

export const getAllUsers = async () => {
  try {
    const res = await axios.get("/users");
    // console.log("getAllUsers success", res.data.data);
    return res.data.data;
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
