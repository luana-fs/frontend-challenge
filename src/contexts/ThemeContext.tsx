import React, { createContext, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import DarkTheme from "../styles/theme/DarkTheme";
import DefaultTheme from "../styles/theme/DefaultTheme";

export const ThemeContext = createContext(false);

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider
      value={{ theme: theme ? DarkTheme : DefaultTheme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
