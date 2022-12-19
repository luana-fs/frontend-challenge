import React, { createContext, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import DarkTheme from "../styles/theme/DarkTheme";
import DefaultTheme from "../styles/theme/DefaultTheme";

export const ThemeContext = createContext(DarkTheme);

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(DarkTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
