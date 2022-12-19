import React from "react";
import { Auth } from "./AuthContext";
import { ProductContextProvider } from "./ProductContext";
import { ThemeContextProvider } from "./ThemeContext";
import { UsersContext } from "./UsersContext";

export const AllProviders = ({ children }: any) => {
  return (
    <ThemeContextProvider>
      <UsersContext>
        <Auth>
          <ProductContextProvider>{children}</ProductContextProvider>
        </Auth>
      </UsersContext>
    </ThemeContextProvider>
  );
};
