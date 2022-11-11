import React from "react";
import { Auth } from "./AuthContext";
import { UsersContext } from "./UsersContext";

export const AllProviders = ({ children }: any) => {
  return (
    <UsersContext>
      <Auth>{children}</Auth>
    </UsersContext>
  );
};
