import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { SideMenu } from "../components/SideMenu";
import LoginPage from "../pages/LoginPage";
import { Theme } from "../styles/theme/types";
import { useTheme as ReactPaperTheme } from "react-native-paper";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { LoginContainer } from "../containers/LoginContainer";
import DashboardPage from "../pages/DashboardPage";
import { AuthContext } from "../contexts/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInPage from "../pages/SignInPage";
import { navigationRef } from "./RootNavigation";
import { useDrawerStatus } from "@react-navigation/drawer";
import { SignInContainer } from "../containers/SignInContainer";

export const Routes = (props: any) => {
  const isReactPaperTheme: Theme = ReactPaperTheme();
  const { isAuth, user } = useContext(AuthContext);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={isReactPaperTheme.dark ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        initialRouteName={isAuth ? "RegisterProduct" : "LoginPage"}
        // initialRouteName={isAuth ? "SideMenu" : "LoginPage"}
        screenOptions={{ headerShown: false }}
      >
        {isAuth ?? (
          <>
            <Stack.Screen name="LoginPage" component={LoginContainer} />
            <Stack.Screen name="SignInPage" component={SignInContainer} />
          </>
        )}

        <Stack.Screen name="SideMenu" component={SideMenu} />
        <Stack.Screen name="DashboardPage" component={DashboardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
