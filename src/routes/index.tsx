import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SideMenu } from "../components/SideMenu";
import LoginPage from "../pages/LoginPage";
import { Theme } from "../styles/theme/types";
import { useTheme as ReactPaperTheme } from "react-native-paper";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { LoginContainer } from "../containers/LoginContainer";
import DashboardPage from "../pages/DashboardPage";

export const Routes = () => {
  const isReactPaperTheme: Theme = ReactPaperTheme();
  return (
    <NavigationContainer
      theme={isReactPaperTheme.dark ? DarkTheme : DefaultTheme}
    >
      {/* <LoginContainer /> */}
      {/* <SignInPage /> */}
      <DashboardPage />
      {/* <SideMenu /> */}
    </NavigationContainer>
  );
};
