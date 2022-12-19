import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import DarkTheme from "../styles/theme/DarkTheme";
import DefaultTheme from "../styles/theme/DefaultTheme";

export const ThemeContext = ({ children }: any) => {
  const [theme, setTheme] = useState(DefaultTheme);
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
