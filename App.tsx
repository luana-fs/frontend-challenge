import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppRegistry } from "react-native";
import {
  DarkTheme,
  Provider as PaperProvider,
  useTheme,
} from "react-native-paper";
import DefaultTheme from "./src/styles/theme/DefaultTheme";
import LoginPage from "./src/pages/LoginPage";
import SignInPage from "./src/pages/SignInPage";
import DashboardPage from "./src/pages/DashboardPage";

export const useAppTheme = () => useTheme();
export default function App() {
  const [theme, setTheme] = useState(DarkTheme);
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        {/* <LoginPage /> */}
        {/* <SignInPage/> */}
        <DashboardPage />
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent("Front challenge", () => App);
