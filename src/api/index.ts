import axios from "axios";

export const api = axios.create({
  baseURL: "/",
});

//fix it
//api.defaults.headers.authorization = `Bearer ${token}`;

// api.interceptors.request.use(async (config) => {
//   // Declaramos um token manualmente para teste.
//   const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

//   if (token) {
//     api.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });
