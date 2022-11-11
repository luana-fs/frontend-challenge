import axios from "axios";
import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  SetStateAction,
} from "react";
import bcrypt from "bcrypt";
import { api } from "../api";
import { UsersListContext } from "./UsersContext";

type CreateUserBodyProps = {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
};

export const AuthContext = createContext(false);

export const Auth = ({ children }: any) => {
  const [token, setToken] = useState([]);
  //   console.log("token", token);

  const userContext = useContext(UsersListContext);

  const user = { name: "Lígia", password: "pipoca" };

  useEffect(() => {
    // userContext.handlers.getAllUsers();
    // findUserById("52");
    // userContext.handlers.createUser({
    //   id: "5691515", //NUNCA COLOQUE IDS IGUAIS NA HR DE CRIAR! e ele só chama quem foi criado pelo mirage!
    //   name: "luana",
    //   email: "luana@deliver.com",
    //   role: "User",
    //   password: "celular",
    // });
    userContext.handlers.findUser("luana@deliver.com");
    // console.log("43", res);
  }, []);

  //   const saltRounds = 10;
  //   const myPlaintextPassword = "s0//P4$$w0rD";
  //   const someOtherPlaintextPassword = "not_bacon";

  //   bcrypt.hash(myPlaintextPassword, saltRounds, function (err: any, hash: any) {
  //     setToken(hash);
  //     console.log(hash);
  //   });

  // async function checkUser(username, password) {

  //   const match = await bcrypt.compare(password, user.passwordHash);

  //   if (match) {
  //     console.log(match)
  //   }

  //   //...
  // }

  //endpoint criar usuário

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};
