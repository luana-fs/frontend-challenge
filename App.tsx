import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider, useTheme } from "react-native-paper";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Routes } from "./src/routes";

import DefaultTheme from "./src/styles/theme/DefaultTheme";
import DarkTheme from "./src/styles/theme/DarkTheme";

export const useAppTheme = () => useTheme();
export default function App() {
  const [theme, setTheme] = useState(DarkTheme);

  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <Routes />
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent("Front challenge", () => App);
