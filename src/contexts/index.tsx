import React from "react";
import { Auth } from "./AuthContext";
import { ProductContextProvider } from "./ProductContext";
import { ThemeContext } from "./ThemeContext";
import { UsersContext } from "./UsersContext";

export const AllProviders = ({ children }: any) => {
  return (
    <ThemeContext>
      <UsersContext>
        <Auth>
          <ProductContextProvider>{children}</ProductContextProvider>
        </Auth>
      </UsersContext>
    </ThemeContext>
  );
};
