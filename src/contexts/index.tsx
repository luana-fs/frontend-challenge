import React from "react";
import { Auth } from "./AuthContext";
import { ProductContextProvider } from "./ProductContext";
import { UsersContext } from "./UsersContext";

export const AllProviders = ({ children }: any) => {
  return (
    <UsersContext>
      <Auth>
        <ProductContextProvider>{children}</ProductContextProvider>
      </Auth>
    </UsersContext>
  );
};
