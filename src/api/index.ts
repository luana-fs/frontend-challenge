import axios from "axios";
import { asyncStorage } from "../services/storeData";

export const api = axios.create({
  baseURL: "http://10.0.0.170:3307",
});

api.interceptors.request.use(async (config) => {
  // Declaramos um token manualmente para teste.
  const token = await asyncStorage.getData();
  if (token) {
    api.defaults.headers.auth = `${token}`;
  }
  return config;
});
