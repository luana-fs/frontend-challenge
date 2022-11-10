import React from "react";
import { UsersContext } from "./UsersContext";

export const AllProviders = ({ children }: any) => {
  return <UsersContext>{children}</UsersContext>;
};
